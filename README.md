# ts-utility

Simple util function package

```
npm i @foxmon/ts-util
```

## 1. Is

Type check util

> isArray
>
> isBoolean
>
> isString

```typescript
// true
console.log(isArray([]));
```

## 2. Array

Array util

each function like Array.forEach

The each function can be used to object or array

```typescript
// each function

// Array version
const array: number[] = [1, 2, 3, 4];
each(array, (num: number) => {
  console.log(num);
});

// Object version
const object = {
  A: "Data-A",
  B: "Data-B",
};
each(object, (item: string, key: string) => {
  console.log(`Value ${item}`);
  console.log(`Key ${key}`);
});
```
