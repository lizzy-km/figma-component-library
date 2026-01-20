/* eslint-disable @typescript-eslint/no-explicit-any */
// utils.ts
export function get(obj: any, path: string) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

export function set(obj: any, path: string, value: any) {
  const keys = path.split(".");
  const clone = structuredClone(obj);
  let cur = clone;

  keys.forEach((k, i) => {
    if (i === keys.length - 1) cur[k] = value;
    else {
      cur[k] ??= {};
      cur = cur[k];
    }
  });

  return clone;
}
