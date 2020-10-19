import React, { FC, memo } from "react";
import "../assets/scss/index.scss";
import { shallowEqual } from "../libs/shallowEqual";

const MainComponent: FC = () => {
  return <main></main>;
};

export default memo(MainComponent, shallowEqual);
