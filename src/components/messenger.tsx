import React, { FC, memo } from "react";
import "../assets/scss/index.scss";
import Aside from "../containers/aside";
import Main from "../containers/main";
import { shallowEqual } from "../libs/shallowEqual";
import styles from "./messenger.module.scss";

const Messenger: FC = () => {
  return (
    <div className={`d-flex flex-nowrap ${styles.messenger}`}>
      <Aside />
      <Main />
    </div>
  );
};

export default memo(Messenger, shallowEqual);
