const { awscdk } = require("projen");
const { NpmAccess } = require("projen/lib/javascript");
const project = new awscdk.AwsCdkConstructLibrary({
  author: "Julian Michel",
  authorAddress: "mail@julianmichel.de",
  cdkVersion: "2.1.0",
  defaultReleaseBranch: "main",
  name: "@jumic/iot-project",
  repositoryUrl: "git@github.com:jumic/iot-project.git",

  prettier: true,

  testdir: "src/__tests__",

  releaseToNpm: true,
  npmAccess: NpmAccess.RESTRICTED,

  gitignore: ["src/__tests__/iot-data-collection-devapp/cdk.out"],

  bundledDeps: [
    "@aws-cdk/aws-iot-alpha",
    "@aws-cdk/aws-iot-actions-alpha",
  ] /* Runtime dependencies of this module. */,
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [] /* Build dependencies for this module. */,
  // packageName: undefined,  /* The "name" in package.json. */
});
addDevApp();
project.synth();

function addDevApp() {
  // add "dev:xxx" tasks for interacting with the dev stack
  const devapp = "src/__tests__/iot-data-collection-devapp";
  const commands = ["synth", "diff", "deploy", "destroy", "bootstrap", "watch"];
  for (const cmd of commands) {
    project.addTask(`dev-iot-data-collection:${cmd}`, {
      description: `cdk ${cmd}`,
      cwd: devapp,
      exec: `npx cdk ${cmd}`,
    });
  }
  project.addTask("dev-iot-data-collection:hotswap", {
    description: "cdk deploy --hotswap",
    cwd: devapp,
    exec: "npx cdk deploy --hotswap",
  });
}
