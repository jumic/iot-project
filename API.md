# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotDataCollection <a name="IotDataCollection" id="@jumic/iot-project.IotDataCollection"></a>

#### Initializers <a name="Initializers" id="@jumic/iot-project.IotDataCollection.Initializer"></a>

```typescript
import { IotDataCollection } from '@jumic/iot-project'

new IotDataCollection(scope: Construct, id: string, props?: IotDataCollectionProps)
```

| **Name**                                                                                           | **Type**                                                                                     | **Description**   |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ----------------- |
| <code><a href="#@jumic/iot-project.IotDataCollection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code>                                                            | _No description._ |
| <code><a href="#@jumic/iot-project.IotDataCollection.Initializer.parameter.id">id</a></code>       | <code>string</code>                                                                          | _No description._ |
| <code><a href="#@jumic/iot-project.IotDataCollection.Initializer.parameter.props">props</a></code> | <code><a href="#@jumic/iot-project.IotDataCollectionProps">IotDataCollectionProps</a></code> | _No description._ |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@jumic/iot-project.IotDataCollection.Initializer.parameter.scope"></a>

- _Type:_ constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@jumic/iot-project.IotDataCollection.Initializer.parameter.id"></a>

- _Type:_ string

---

##### `props`<sup>Optional</sup> <a name="props" id="@jumic/iot-project.IotDataCollection.Initializer.parameter.props"></a>

- _Type:_ <a href="#@jumic/iot-project.IotDataCollectionProps">IotDataCollectionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                           | **Description**                                    |
| ---------------------------------------------------------------------------------- | -------------------------------------------------- |
| <code><a href="#@jumic/iot-project.IotDataCollection.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@jumic/iot-project.IotDataCollection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name**                                                                                 | **Description**               |
| ---------------------------------------------------------------------------------------- | ----------------------------- |
| <code><a href="#@jumic/iot-project.IotDataCollection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@jumic/iot-project.IotDataCollection.isConstruct"></a>

```typescript
import { IotDataCollection } from '@jumic/iot-project'

IotDataCollection.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@jumic/iot-project.IotDataCollection.isConstruct.parameter.x"></a>

- _Type:_ any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                            | **Type**                     | **Description** |
| ----------------------------------------------------------------------------------- | ---------------------------- | --------------- |
| <code><a href="#@jumic/iot-project.IotDataCollection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node.  |

---

##### `node`<sup>Required</sup> <a name="node" id="@jumic/iot-project.IotDataCollection.property.node"></a>

```typescript
public readonly node: Node;
```

- _Type:_ constructs.Node

The tree node.

---

### IotDataCollectionPipelineStack <a name="IotDataCollectionPipelineStack" id="@jumic/iot-project.IotDataCollectionPipelineStack"></a>

#### Initializers <a name="Initializers" id="@jumic/iot-project.IotDataCollectionPipelineStack.Initializer"></a>

```typescript
import { IotDataCollectionPipelineStack } from '@jumic/iot-project'

new IotDataCollectionPipelineStack(scope: Construct, id: string, props: IotDataCollectionPipelineStackProps)
```

| **Name**                                                                                                        | **Type**                                                                                                               | **Description**   |
| --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------- |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code>                                                                                      | _No description._ |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.Initializer.parameter.id">id</a></code>       | <code>string</code>                                                                                                    | _No description._ |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.Initializer.parameter.props">props</a></code> | <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStackProps">IotDataCollectionPipelineStackProps</a></code> | _No description._ |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@jumic/iot-project.IotDataCollectionPipelineStack.Initializer.parameter.scope"></a>

- _Type:_ constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@jumic/iot-project.IotDataCollectionPipelineStack.Initializer.parameter.id"></a>

- _Type:_ string

---

##### `props`<sup>Required</sup> <a name="props" id="@jumic/iot-project.IotDataCollectionPipelineStack.Initializer.parameter.props"></a>

- _Type:_ <a href="#@jumic/iot-project.IotDataCollectionPipelineStackProps">IotDataCollectionPipelineStackProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name**                                                                                                                      | **Description**                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.toString">toString</a></code>                               | Returns a string representation of this construct.                                                           |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.addDependency">addDependency</a></code>                     | Add a dependency between this stack and another stack.                                                       |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.addTransform">addTransform</a></code>                       | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.exportValue">exportValue</a></code>                         | Create a CloudFormation Export for a value.                                                                  |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.formatArn">formatArn</a></code>                             | Creates an ARN from components.                                                                              |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.getLogicalId">getLogicalId</a></code>                       | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.                 |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.renameLogicalId">renameLogicalId</a></code>                 | Rename a generated logical identities.                                                                       |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected.                                                                    |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.resolve">resolve</a></code>                                 | Resolve a tokenized value in the context of the current stack.                                               |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.splitArn">splitArn</a></code>                               | Splits the provided ARN into its components.                                                                 |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.toJsonString">toJsonString</a></code>                       | Convert an object, potentially containing tokens, to a JSON string.                                          |

---

##### `toString` <a name="toString" id="@jumic/iot-project.IotDataCollectionPipelineStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="@jumic/iot-project.IotDataCollectionPipelineStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="@jumic/iot-project.IotDataCollectionPipelineStack.addDependency.parameter.target"></a>

- _Type:_ aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="@jumic/iot-project.IotDataCollectionPipelineStack.addDependency.parameter.reason"></a>

- _Type:_ string

---

##### `addTransform` <a name="addTransform" id="@jumic/iot-project.IotDataCollectionPipelineStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

_Example_

```typescript
declare const stack: Stack;

stack.addTransform("AWS::Serverless-2016-10-31");
```

###### `transform`<sup>Required</sup> <a name="transform" id="@jumic/iot-project.IotDataCollectionPipelineStack.addTransform.parameter.transform"></a>

- _Type:_ string

The transform to add.

---

##### `exportValue` <a name="exportValue" id="@jumic/iot-project.IotDataCollectionPipelineStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to _remove_ the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

## Example

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

### Deployment 1: break the relationship

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

### Deployment 2: remove the bucket resource

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@jumic/iot-project.IotDataCollectionPipelineStack.exportValue.parameter.exportedValue"></a>

- _Type:_ any

---

###### `options`<sup>Optional</sup> <a name="options" id="@jumic/iot-project.IotDataCollectionPipelineStack.exportValue.parameter.options"></a>

- _Type:_ aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="@jumic/iot-project.IotDataCollectionPipelineStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

arn:{partition}:{service}:{region}:{account}:{resource}{sep}}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="@jumic/iot-project.IotDataCollectionPipelineStack.formatArn.parameter.components"></a>

- _Type:_ aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="@jumic/iot-project.IotDataCollectionPipelineStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="@jumic/iot-project.IotDataCollectionPipelineStack.getLogicalId.parameter.element"></a>

- _Type:_ aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `renameLogicalId` <a name="renameLogicalId" id="@jumic/iot-project.IotDataCollectionPipelineStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="@jumic/iot-project.IotDataCollectionPipelineStack.renameLogicalId.parameter.oldId"></a>

- _Type:_ string

---

###### `newId`<sup>Required</sup> <a name="newId" id="@jumic/iot-project.IotDataCollectionPipelineStack.renameLogicalId.parameter.newId"></a>

- _Type:_ string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="@jumic/iot-project.IotDataCollectionPipelineStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="@jumic/iot-project.IotDataCollectionPipelineStack.reportMissingContextKey.parameter.report"></a>

- _Type:_ aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="@jumic/iot-project.IotDataCollectionPipelineStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="@jumic/iot-project.IotDataCollectionPipelineStack.resolve.parameter.obj"></a>

- _Type:_ any

---

##### `splitArn` <a name="splitArn" id="@jumic/iot-project.IotDataCollectionPipelineStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="@jumic/iot-project.IotDataCollectionPipelineStack.splitArn.parameter.arn"></a>

- _Type:_ string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="@jumic/iot-project.IotDataCollectionPipelineStack.splitArn.parameter.arnFormat"></a>

- _Type:_ aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="@jumic/iot-project.IotDataCollectionPipelineStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="@jumic/iot-project.IotDataCollectionPipelineStack.toJsonString.parameter.obj"></a>

- _Type:_ any

---

###### `space`<sup>Optional</sup> <a name="space" id="@jumic/iot-project.IotDataCollectionPipelineStack.toJsonString.parameter.space"></a>

- _Type:_ number

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name**                                                                                              | **Description**                                                 |
| ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct.                                   |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.isStack">isStack</a></code>         | Return whether the given object is a Stack.                     |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.of">of</a></code>                   | Looks up the first stack scope in which `construct` is defined. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@jumic/iot-project.IotDataCollectionPipelineStack.isConstruct"></a>

```typescript
import { IotDataCollectionPipelineStack } from '@jumic/iot-project'

IotDataCollectionPipelineStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@jumic/iot-project.IotDataCollectionPipelineStack.isConstruct.parameter.x"></a>

- _Type:_ any

Any object.

---

##### `isStack` <a name="isStack" id="@jumic/iot-project.IotDataCollectionPipelineStack.isStack"></a>

```typescript
import { IotDataCollectionPipelineStack } from '@jumic/iot-project'

IotDataCollectionPipelineStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="@jumic/iot-project.IotDataCollectionPipelineStack.isStack.parameter.x"></a>

- _Type:_ any

---

##### `of` <a name="of" id="@jumic/iot-project.IotDataCollectionPipelineStack.of"></a>

```typescript
import { IotDataCollectionPipelineStack } from '@jumic/iot-project'

IotDataCollectionPipelineStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="@jumic/iot-project.IotDataCollectionPipelineStack.of.parameter.construct"></a>

- _Type:_ constructs.IConstruct

The construct to start the search from.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                                                           | **Type**                                   | **Description**                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.property.node">node</a></code>                                   | <code>constructs.Node</code>               | The tree node.                                                                                                 |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.property.account">account</a></code>                             | <code>string</code>                        | The AWS account into which this stack will be deployed.                                                        |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.property.artifactId">artifactId</a></code>                       | <code>string</code>                        | The ID of the cloud assembly artifact for this stack.                                                          |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.property.availabilityZones">availabilityZones</a></code>         | <code>string[]</code>                      | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.property.dependencies">dependencies</a></code>                   | <code>aws-cdk-lib.Stack[]</code>           | Return the stacks this stack depends on.                                                                       |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.property.environment">environment</a></code>                     | <code>string</code>                        | The environment coordinates in which this stack is deployed.                                                   |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.property.nested">nested</a></code>                               | <code>boolean</code>                       | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.      |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.property.nestedStackParent">nestedStackParent</a></code>         | <code>aws-cdk-lib.Stack</code>             | If this is a nested stack, returns it's parent stack.                                                          |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.property.nestedStackResource">nestedStackResource</a></code>     | <code>aws-cdk-lib.CfnResource</code>       | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.                          |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.property.notificationArns">notificationArns</a></code>           | <code>string[]</code>                      | Returns the list of notification Amazon Resource Names (ARNs) for the current stack.                           |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.property.partition">partition</a></code>                         | <code>string</code>                        | The partition in which this stack is defined.                                                                  |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.property.region">region</a></code>                               | <code>string</code>                        | The AWS region into which this stack will be deployed (e.g. `us-west-2`).                                      |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.property.stackId">stackId</a></code>                             | <code>string</code>                        | The ID of the stack.                                                                                           |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.property.stackName">stackName</a></code>                         | <code>string</code>                        | The concrete CloudFormation physical stack name.                                                               |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.property.synthesizer">synthesizer</a></code>                     | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack.                                                                               |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.property.tags">tags</a></code>                                   | <code>aws-cdk-lib.TagManager</code>        | Tags to be applied to the stack.                                                                               |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.property.templateFile">templateFile</a></code>                   | <code>string</code>                        | The name of the CloudFormation template file emitted to the output directory during synthesis.                 |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.property.templateOptions">templateOptions</a></code>             | <code>aws-cdk-lib.ITemplateOptions</code>  | Options for CloudFormation template (like version, transform, description).                                    |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code>                       | Whether termination protection is enabled for this stack.                                                      |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStack.property.urlSuffix">urlSuffix</a></code>                         | <code>string</code>                        | The Amazon domain suffix for the region in which this stack is defined.                                        |

---

##### `node`<sup>Required</sup> <a name="node" id="@jumic/iot-project.IotDataCollectionPipelineStack.property.node"></a>

```typescript
public readonly node: Node;
```

- _Type:_ constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="@jumic/iot-project.IotDataCollectionPipelineStack.property.account"></a>

```typescript
public readonly account: string;
```

- _Type:_ string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concerete account (e.g. `585695031111`) or the
   `Aws.accountId` token.
2. `Aws.accountId`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concerete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@jumic/iot-project.IotDataCollectionPipelineStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- _Type:_ string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@jumic/iot-project.IotDataCollectionPipelineStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- _Type:_ string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@jumic/iot-project.IotDataCollectionPipelineStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- _Type:_ aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@jumic/iot-project.IotDataCollectionPipelineStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- _Type:_ string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.account` or `Aws.region`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="@jumic/iot-project.IotDataCollectionPipelineStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- _Type:_ boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="@jumic/iot-project.IotDataCollectionPipelineStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- _Type:_ aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="@jumic/iot-project.IotDataCollectionPipelineStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- _Type:_ aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@jumic/iot-project.IotDataCollectionPipelineStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- _Type:_ string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@jumic/iot-project.IotDataCollectionPipelineStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- _Type:_ string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="@jumic/iot-project.IotDataCollectionPipelineStack.property.region"></a>

```typescript
public readonly region: string;
```

- _Type:_ string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concerete region (e.g. `us-west-2`) or the `Aws.region`
   token.
2. `Aws.region`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concerete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@jumic/iot-project.IotDataCollectionPipelineStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- _Type:_ string

The ID of the stack.

---

_Example_

```typescript
// After resolving, looks like
"arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123";
```

##### `stackName`<sup>Required</sup> <a name="stackName" id="@jumic/iot-project.IotDataCollectionPipelineStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- _Type:_ string

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.stackName` directly.

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="@jumic/iot-project.IotDataCollectionPipelineStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- _Type:_ aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@jumic/iot-project.IotDataCollectionPipelineStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- _Type:_ aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="@jumic/iot-project.IotDataCollectionPipelineStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- _Type:_ string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="@jumic/iot-project.IotDataCollectionPipelineStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- _Type:_ aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@jumic/iot-project.IotDataCollectionPipelineStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- _Type:_ boolean

Whether termination protection is enabled for this stack.

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="@jumic/iot-project.IotDataCollectionPipelineStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- _Type:_ string

The Amazon domain suffix for the region in which this stack is defined.

---

## Structs <a name="Structs" id="Structs"></a>

### IotDataCollectionPipelineStackProps <a name="IotDataCollectionPipelineStackProps" id="@jumic/iot-project.IotDataCollectionPipelineStackProps"></a>

#### Initializer <a name="Initializer" id="@jumic/iot-project.IotDataCollectionPipelineStackProps.Initializer"></a>

```typescript
import { IotDataCollectionPipelineStackProps } from '@jumic/iot-project'

const iotDataCollectionPipelineStackProps: IotDataCollectionPipelineStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                                                                      | **Type**                                                                                                       | **Description**                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStackProps.property.analyticsReporting">analyticsReporting</a></code>             | <code>boolean</code>                                                                                           | Include runtime versioning information in this Stack.                               |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStackProps.property.description">description</a></code>                           | <code>string</code>                                                                                            | A description of the stack.                                                         |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStackProps.property.env">env</a></code>                                           | <code>aws-cdk-lib.Environment</code>                                                                           | The AWS environment (account/region) where this stack will be deployed.             |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStackProps.property.stackName">stackName</a></code>                               | <code>string</code>                                                                                            | Name to deploy the stack with.                                                      |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStackProps.property.synthesizer">synthesizer</a></code>                           | <code>aws-cdk-lib.IStackSynthesizer</code>                                                                     | Synthesis method to use while deploying this stack.                                 |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStackProps.property.tags">tags</a></code>                                         | <code>{[ key: string ]: string}</code>                                                                         | Stack tags that will be applied to all the taggable resources and the stack itself. |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStackProps.property.terminationProtection">terminationProtection</a></code>       | <code>boolean</code>                                                                                           | Whether to enable termination protection for this stack.                            |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStackProps.property.codeCommitRepositoryName">codeCommitRepositoryName</a></code> | <code>string</code>                                                                                            | CodeCommit Repository Name.                                                         |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStackProps.property.npmTokenSecretArn">npmTokenSecretArn</a></code>               | <code>string</code>                                                                                            | _No description._                                                                   |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStackProps.property.stages">stages</a></code>                                     | <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStage">IotDataCollectionPipelineStage</a>[]</code> | _No description._                                                                   |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="@jumic/iot-project.IotDataCollectionPipelineStackProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- _Type:_ boolean
- _Default:_ `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `description`<sup>Optional</sup> <a name="description" id="@jumic/iot-project.IotDataCollectionPipelineStackProps.property.description"></a>

```typescript
public readonly description: string;
```

- _Type:_ string
- _Default:_ No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="@jumic/iot-project.IotDataCollectionPipelineStackProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- _Type:_ aws-cdk-lib.Environment
- _Default:_ The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "_environment-agnostic_"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

_Example_

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, "Stack1", {
  env: {
    account: "123456789012",
    region: "us-east-1",
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, "Stack2", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, "MyStage", {
  env: {
    account: "123456789012",
    region: "us-east-1",
  },
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, "Stack1");
new YourStack(myStage, "Stack2");

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, "Stack1");
```

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@jumic/iot-project.IotDataCollectionPipelineStackProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- _Type:_ string
- _Default:_ Derived from construct path.

Name to deploy the stack with.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="@jumic/iot-project.IotDataCollectionPipelineStackProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- _Type:_ aws-cdk-lib.IStackSynthesizer
- _Default:_ `DefaultStackSynthesizer` if the `@aws-cdk/core:newStyleStackSynthesis` feature flag is set, `LegacyStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@jumic/iot-project.IotDataCollectionPipelineStackProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- _Type:_ {[ key: string ]: string}
- _Default:_ {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@jumic/iot-project.IotDataCollectionPipelineStackProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- _Type:_ boolean
- _Default:_ false

Whether to enable termination protection for this stack.

---

##### `codeCommitRepositoryName`<sup>Required</sup> <a name="codeCommitRepositoryName" id="@jumic/iot-project.IotDataCollectionPipelineStackProps.property.codeCommitRepositoryName"></a>

```typescript
public readonly codeCommitRepositoryName: string;
```

- _Type:_ string

CodeCommit Repository Name.

---

##### `npmTokenSecretArn`<sup>Required</sup> <a name="npmTokenSecretArn" id="@jumic/iot-project.IotDataCollectionPipelineStackProps.property.npmTokenSecretArn"></a>

```typescript
public readonly npmTokenSecretArn: string;
```

- _Type:_ string

---

##### `stages`<sup>Required</sup> <a name="stages" id="@jumic/iot-project.IotDataCollectionPipelineStackProps.property.stages"></a>

```typescript
public readonly stages: IotDataCollectionPipelineStage[];
```

- _Type:_ <a href="#@jumic/iot-project.IotDataCollectionPipelineStage">IotDataCollectionPipelineStage</a>[]

---

### IotDataCollectionPipelineStage <a name="IotDataCollectionPipelineStage" id="@jumic/iot-project.IotDataCollectionPipelineStage"></a>

#### Initializer <a name="Initializer" id="@jumic/iot-project.IotDataCollectionPipelineStage.Initializer"></a>

```typescript
import { IotDataCollectionPipelineStage } from '@jumic/iot-project'

const iotDataCollectionPipelineStage: IotDataCollectionPipelineStage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                         | **Type**                             | **Description**   |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ----------------- |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStage.property.env">env</a></code>   | <code>aws-cdk-lib.Environment</code> | _No description._ |
| <code><a href="#@jumic/iot-project.IotDataCollectionPipelineStage.property.name">name</a></code> | <code>string</code>                  | _No description._ |

---

##### `env`<sup>Required</sup> <a name="env" id="@jumic/iot-project.IotDataCollectionPipelineStage.property.env"></a>

```typescript
public readonly env: Environment;
```

- _Type:_ aws-cdk-lib.Environment

---

##### `name`<sup>Required</sup> <a name="name" id="@jumic/iot-project.IotDataCollectionPipelineStage.property.name"></a>

```typescript
public readonly name: string;
```

- _Type:_ string

---

### IotDataCollectionProps <a name="IotDataCollectionProps" id="@jumic/iot-project.IotDataCollectionProps"></a>

#### Initializer <a name="Initializer" id="@jumic/iot-project.IotDataCollectionProps.Initializer"></a>

```typescript
import { IotDataCollectionProps } from '@jumic/iot-project'

const iotDataCollectionProps: IotDataCollectionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                                                                     | **Type**            | **Description**                         |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------- | --------------------------------------- |
| <code><a href="#@jumic/iot-project.IotDataCollectionProps.property.queueVisibilityTimeout">queueVisibilityTimeout</a></code> | <code>number</code> | Timeout of processing a single message. |

---

##### `queueVisibilityTimeout`<sup>Optional</sup> <a name="queueVisibilityTimeout" id="@jumic/iot-project.IotDataCollectionProps.property.queueVisibilityTimeout"></a>

```typescript
public readonly queueVisibilityTimeout: number;
```

- _Type:_ number

Timeout of processing a single message.

---
