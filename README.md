## Q1 What are some differences between interfaces and types in TypeScript?

| Type | Interface |
|------|-----------|
| Used to group different types together. | Used to describe the shape or structure of an object. |
| More flexible – works with many things. | Less flexible – mostly used for objects and classes. |
| Written using `type`. | Written using `interface`. |
| Good for giving a name to complex types (like union or tuple). | Good for defining object structures. |
| Has fewer features than interface. | Has more features – like merging and extending. |
| Not mainly for objects. | Best for objects. |
| Can't be declared multiple times with the same name. | Can be declared multiple times – they will merge. |
| If you use the same name twice, it shows an error. | Same name interfaces will combine together. |
| Not used for class implementation. | Can be used in classes and extended. |
| Cannot extend or implement union types. | Can extend and implement union types. |
| Can combine multiple types (called intersection). | Can't do intersection with interfaces. |
| Works well with primitive types (like `string`, `number`), unions, and tuples. | Not used for those kinds of types. |

