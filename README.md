# sort-predicate

A simple utility for creating flexible sorting predicates for arrays of objects in JavaScript and TypeScript.

## Features

- Lightweight and easy to use
- Supports ascending and descending sorting
- Handles `null` and `undefined` values gracefully
- Compatible with JavaScript and TypeScript

## Installation

Install the package via npm:

```bash
npm install sort-predicate
```

## Usage
The createSortPredicate function generates a sorting predicate that can be used to sort arrays of objects by a specified field.

## Example

```typescript
import { createSortPredicate } from 'sort-predicate';

interface IModel {
    name: string;
}

const byName = createSortPredicate<IModel>("name");
const byNameDesc = createSortPredicate<IModel>("name", "desc");

const arr = [{ name: "002" }, { name: "001" }, { name: "003" }];

console.log(arr.sort(byName));       // Output: [{ name: "001" }, { name: "002" }, { name: "003" }]
console.log(arr.sort(byNameDesc));    // Output: [{ name: "003" }, { name: "002" }, { name: "001" }]
```

## API

`createSortPredicate<T>(field: keyof T, order: 'asc' | 'desc' = 'asc')`

- **field**: The field in the object to sort by.
- **order**: The order of sorting: "asc" for ascending, "desc" for descending. Default is "asc".

Returns a predicate function that can be used with Array.sort().

## Testing

This package includes tests written in Jest. To run the tests, simply execute:

```bash
npm test
```

## License

This project is licensed under the MIT License.