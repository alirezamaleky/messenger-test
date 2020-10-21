import React, { FC, memo } from "react";
import { MessagesType } from "../containers/main";
import { fromNow } from "../libs/date";
import { shallowEqual } from "../libs/shallowEqual";
import { direction } from "../themes";
import styles from "./main-messages.module.scss";
import { InfinityPagination } from "./modules/pagination";

type Props = {
  messages: MessagesType;
};

const MainMessagesComponent: FC<Props> = (props) => {
  const loadNext = () => {
    return new Promise((resolve) => {
      console.log("loadNext");
      resolve();
    });
  };

  const loadPrev = () => {
    return new Promise((resolve) => {
      console.log("loadPrev");
      resolve();
    });
  };

  return (
    <div className={`col overflow-auto ${styles.messages}`}>
      <InfinityPagination loadNext={loadNext} loadPrev={loadPrev}>
        {props.messages.map((message) => (
          <div key={message.id} className={`p-2 my-2 ${styles.message} ${message.isMine ? styles.mine : ""}`}>
            <div className="d-flex flex-wrap align-items-center">
              <p className={`text-justify p-0 m-0 ${styles.content}`}>{message.text}</p>
              <time className={`col text-nowrap text-end ${styles.time} ${direction === "rtl" ? "mr-2" : "ml-2"}`}>{fromNow(message.time)}</time>
            </div>
          </div>
        ))}
      </InfinityPagination>
    </div>
  );
};

export default memo(MainMessagesComponent, shallowEqual);
