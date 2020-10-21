import React, { FC, memo } from "react";
import { MessagesType } from "../containers/main";
import MainHeader from "../containers/main-header";
import { shallowEqual } from "../libs/shallowEqual";
import MainEditorComponent from "./main-editor";
import MainMessagesComponent from "./main-messages";
import styles from "./main.module.scss";

type Props = {
  sendMessage: (content: string) => void;
  isInChat: boolean;
  messages: MessagesType;
};

const MainComponent: FC<Props> = (props) => {
  return (
    <main className={`shadow h-100 d-flex flex-column justify-content-between ${styles.main}`}>
      <MainHeader />
      {props.isInChat && <MainMessagesComponent messages={props.messages} />}
      <MainEditorComponent sendMessage={props.sendMessage} isInChat={props.isInChat} />
    </main>
  );
};

export default memo(MainComponent, shallowEqual);
