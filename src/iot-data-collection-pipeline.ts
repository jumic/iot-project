import { Environment, Stack, Stage, StageProps } from "aws-cdk-lib";
import { BuildEnvironmentVariableType } from "aws-cdk-lib/aws-codebuild";
import { Repository } from "aws-cdk-lib/aws-codecommit";
import {
  CodeBuildStep,
  CodePipeline,
  CodePipelineSource,
} from "aws-cdk-lib/pipelines";
import { Construct } from "constructs";
import { IotDataCollection } from "./iot-data-collection";

export interface IotDataCollectionPipelineStage {
  readonly env: Environment;
  readonly name: string;
}

export interface IotDataCollectionPipelineProps {
  /**
   * CodeCommit Repository Name
   */
  readonly codeCommitRepositoryName: string;

  readonly stages: IotDataCollectionPipelineStage[];

  readonly npmTokenSecretArn: string;
}

export class IotDataCollectionPipeline extends Construct {
  public constructor(
    scope: Construct,
    id: string,
    props: IotDataCollectionPipelineProps
  ) {
    super(scope, id);

    const repository = Repository.fromRepositoryName(
      this,
      "Repository",
      props.codeCommitRepositoryName
    );

    const pipeline = new CodePipeline(this, "Pipeline", {
      pipelineName: "MyPipeline",
      synth: new CodeBuildStep("Synth", {
        input: CodePipelineSource.codeCommit(repository, "main"),
        commands: ["npm ci", "npm run build", "npx cdk synth"],
        buildEnvironment: {
          environmentVariables: {
            NPM_TOKEN: {
              type: BuildEnvironmentVariableType.SECRETS_MANAGER,
              value: props.npmTokenSecretArn,
            },
          },
        },
      }),
    });

    props.stages.forEach((stage) => {
      pipeline.addStage(
        new MyApplication(this, stage.name, {
          env: stage.env,
        })
      );
    });
  }
}

class MyApplication extends Stage {
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    const stack = new Stack(this, "IotDataCollectionStack");
    new IotDataCollection(stack, "IotDataCollection");
  }
}
