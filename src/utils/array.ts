export function removeDuplicate<T>(arr1: Array<T>, arr2: Array<T>): Array<T> {
  return arr1.filter((value: T, idx: number) => arr2.indexOf(value) === idx);
}

export async function asyncEach<T>(
  arr: Array<T>,
  cb: (item: T) => Promise<any>
): Promise<void> {
  const indexes: Array<number> = Array.from({ length: arr.length })
    .fill(0)
    .map((_, idx: number) => idx);
  for (const index of indexes) {
    await cb(arr[index]);
  }
}
