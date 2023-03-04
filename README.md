# ts-utility

Simple util function package

```
npm i @foxmon/ts-util
```

```typescript
import tu from "@foxmon/ts-util";
```

## 1. is

Type check util

> isArray
>
> isBoolean
>
> isString

```typescript
// true
console.log(tu.isArray([]));
```

## 2. array

Array util

each function like Array.forEach

The each function can be used to object or array

```typescript
// each function

// Array version
const array: number[] = [1, 2, 3, 4];
tu.each(array, (num: number) => {
  console.log(num);
});

// Object version
const object = {
  A: "Data-A",
  B: "Data-B",
};
tu.each(object, (item: string, key: string) => {
  console.log(`Value ${item}`);
  console.log(`Key ${key}`);
});
```

## 3. object

Object util

Deep copy object

```typescript
const obj = {
  a: {
    b: 1,
  },
  c: 2,
};

const co = tu.deepClone(obj);
```
