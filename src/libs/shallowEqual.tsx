import { functions, isEqual, isObject, omit } from "lodash";
import { PropsWithChildren } from "react";

export const shallowEqual: (value: PropsWithChildren<any>, other: PropsWithChildren<any>) => boolean = (value: PropsWithChildren<any>, other: PropsWithChildren<any>) => {
  isObject(value) && (value = omit(value, functions(value)));
  isObject(other) && (other = omit(other, functions(other)));
  return isEqual(value, other);
};
