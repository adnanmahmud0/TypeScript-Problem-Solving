## What are some differences between interfaces and types in TypeScript?

| Type | Interface |
|------|-----------|
| A collection of data types. | A syntactical contract. |
| More flexible. | Less flexible compared to type. |
| Uses the `type` keyword | Uses the `interface` keyword. |
| Supports creating a new name for a type. | Provides a way to define entities. |
| Has fewer capabilities. | Has more capabilities. |
| Does not inherently support the use of an object. | Supports the use of an object. |
| Does not support multiple merged declarations. | Supports multiple merged declarations. |
| Two types with the same name raise an exception. | Two interfaces with the same name get merged. |
| Does not have implementation purposes. | Used for implementation and extending in classes. |
| Does not support implementing or extending union types. | Supports implementing and extending union types. |
| Can create intersection types by combining multiple types. | Cannot create intersection interfaces. |
| Can be used for types like primitives, unions, and tuples. | Cannot be used with other types of declaration. |
