import React, { FC, memo } from "react";
import "../assets/scss/index.scss";
import { shallowEqual } from "../libs/shallowEqual";
import styles from "./main.module.scss";

const MainComponent: FC = () => {
  return <main className={styles.main}></main>;
};

export default memo(MainComponent, shallowEqual);
