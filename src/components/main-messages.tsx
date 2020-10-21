import React, { FC, memo } from "react";
import { shallowEqual } from "../libs/shallowEqual";

type Props = {};

const MainMessagesComponent: FC<Props> = (props) => {
  return <div></div>;
};

export default memo(MainMessagesComponent, shallowEqual);
