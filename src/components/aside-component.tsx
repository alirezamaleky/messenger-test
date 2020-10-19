import React, { FC, memo } from "react";
import "../assets/scss/index.scss";
import { shallowEqual } from "../libs/shallowEqual";

const AsideComponent: FC = () => {
  return <aside></aside>;
};

export default memo(AsideComponent, shallowEqual);
