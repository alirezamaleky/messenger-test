import React, { FC, memo } from "react";
import "../assets/scss/index.scss";
import MainHeader from "../containers/main-header";
import { shallowEqual } from "../libs/shallowEqual";
import styles from "./main.module.scss";

const MainComponent: FC = () => {
  return (
    <main className={`shadow h-100 d-flex flex-column justify-content-start ${styles.main}`}>
      <MainHeader />
    </main>
  );
};

export default memo(MainComponent, shallowEqual);
