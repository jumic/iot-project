import * as actions from "@aws-cdk/aws-iot-actions-alpha";
import * as iot from "@aws-cdk/aws-iot-alpha";
import { Duration } from "aws-cdk-lib";
import { Queue } from "aws-cdk-lib/aws-sqs";
import { Construct } from "constructs";

export interface IotDataCollectionProps {
  /**
   * Timeout of processing a single message.
   */
  readonly queueVisibilityTimeout?: number;
}

export class IotDataCollection extends Construct {
  public constructor(
    scope: Construct,
    id: string,
    props?: IotDataCollectionProps
  ) {
    super(scope, id);

    const queue = new Queue(this, "MyQueue", {
      visibilityTimeout: props?.queueVisibilityTimeout
        ? Duration.seconds(props.queueVisibilityTimeout)
        : undefined,
    });

    new iot.TopicRule(this, "TopicRule", {
      sql: iot.IotSql.fromStringAsVer20160323(
        "SELECT *, timestamp() as timestamp FROM 'esp32/states'"
      ),
      actions: [new actions.SqsQueueAction(queue)],
    });
  }
}
