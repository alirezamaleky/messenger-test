import React, { FC, memo } from "react";
import { MessagesType } from "../containers/main";
import { shallowEqual } from "../libs/shallowEqual";
import styles from "./main-messages.module.scss";

type Props = {
  messages: MessagesType;
};

const MainMessagesComponent: FC<Props> = (props) => {
  return (
    <div className={`col overflow-auto ${styles.messages}`}>
      {props.messages.map((message) => (
        <div>{message.text}</div>
      ))}
    </div>
  );
};

export default memo(MainMessagesComponent, shallowEqual);
