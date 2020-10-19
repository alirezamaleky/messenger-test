import { functions, isEqual, omit } from "lodash";
import { PropsWithChildren } from "react";

export const shallowEqual: (value: PropsWithChildren<any>, other: PropsWithChildren<any>) => boolean = (value: PropsWithChildren<any>, other: PropsWithChildren<any>) => {
  value = omit(value, functions(value));
  other = omit(other, functions(other));
  return isEqual(value, other);
};
