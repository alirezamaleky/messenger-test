import React, { FC, memo } from "react";
import MainHeader from "../containers/main-header";
import { shallowEqual } from "../libs/shallowEqual";
import MainEditorComponent from "./main-editor";
import styles from "./main.module.scss";

type Props = {
  sendMessage: (content: string) => void;
};

const MainComponent: FC<Props> = (props) => {
  return (
    <main className={`shadow h-100 d-flex flex-column justify-content-between ${styles.main}`}>
      <MainHeader />
      <MainEditorComponent sendMessage={props.sendMessage} />
    </main>
  );
};

export default memo(MainComponent, shallowEqual);
