import { App, Stack } from "aws-cdk-lib";
import { IotDataCollection } from "../../iot-data-collection";

const app = new App();
const stack = new Stack(app, "iot-data-collection-stack");
new IotDataCollection(stack, "IotDataCollection");
app.synth();
