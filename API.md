# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotDataCollection <a name="IotDataCollection" id="@jumic/iot-project.IotDataCollection"></a>

#### Initializers <a name="Initializers" id="@jumic/iot-project.IotDataCollection.Initializer"></a>

```typescript
import { IotDataCollection } from '@jumic/iot-project'

new IotDataCollection(scope: Construct, id: string, props?: IotDataCollectionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jumic/iot-project.IotDataCollection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@jumic/iot-project.IotDataCollection.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@jumic/iot-project.IotDataCollection.Initializer.parameter.props">props</a></code> | <code><a href="#@jumic/iot-project.IotDataCollectionProps">IotDataCollectionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@jumic/iot-project.IotDataCollection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@jumic/iot-project.IotDataCollection.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@jumic/iot-project.IotDataCollection.Initializer.parameter.props"></a>

- *Type:* <a href="#@jumic/iot-project.IotDataCollectionProps">IotDataCollectionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jumic/iot-project.IotDataCollection.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@jumic/iot-project.IotDataCollection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jumic/iot-project.IotDataCollection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@jumic/iot-project.IotDataCollection.isConstruct"></a>

```typescript
import { IotDataCollection } from '@jumic/iot-project'

IotDataCollection.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@jumic/iot-project.IotDataCollection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jumic/iot-project.IotDataCollection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@jumic/iot-project.IotDataCollection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### IotDataCollectionProps <a name="IotDataCollectionProps" id="@jumic/iot-project.IotDataCollectionProps"></a>

#### Initializer <a name="Initializer" id="@jumic/iot-project.IotDataCollectionProps.Initializer"></a>

```typescript
import { IotDataCollectionProps } from '@jumic/iot-project'

const iotDataCollectionProps: IotDataCollectionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jumic/iot-project.IotDataCollectionProps.property.queueVisibilityTimeout">queueVisibilityTimeout</a></code> | <code>number</code> | Timeout of processing a single message. |

---

##### `queueVisibilityTimeout`<sup>Optional</sup> <a name="queueVisibilityTimeout" id="@jumic/iot-project.IotDataCollectionProps.property.queueVisibilityTimeout"></a>

```typescript
public readonly queueVisibilityTimeout: number;
```

- *Type:* number

Timeout of processing a single message.

---



