import { LinearProgress } from "@material-ui/core";
import React, { FC, memo, useEffect, useRef, useState } from "react";
import { InView } from "react-intersection-observer";
import { shallowEqual } from "../../libs/shallowEqual";
import styles from "./pagination.module.scss";

export type InfinityPaginationProps = {
  children?: any;
  mountedKey?: string;
  loadNext?: () => Promise<any>;
  loadPrev?: () => Promise<any>;
};

export const InfinityPagination: FC<InfinityPaginationProps> = memo((props) => {
  const wrapperElement = useRef(null);

  const [loadingUp, setLoadingTop] = useState<boolean>(false);
  const [loadingDown, setLoadingDown] = useState<boolean>(false);
  const [hasNext, setHasNext] = useState<boolean>(true);
  const [hasPrev, setHasPrev] = useState<boolean>(true);
  const [mountedKey, setMountedKey] = useState<string>("");

  useEffect(() => {
    setLoadingTop(false);
    setLoadingDown(false);
    setHasNext(true);
    setHasPrev(true);
    setMountedKey("");
  }, [props.mountedKey]);

  const loadMore: (direction: "UP" | "DOWN") => void = (direction: "UP" | "DOWN") => {
    let promise: Promise<any> | undefined;
    if (direction === "UP" && hasPrev && props.loadPrev !== undefined && !loadingUp) {
      (promise = props.loadPrev()) && setLoadingTop(true);
    } else if (direction === "DOWN" && hasNext && props.loadNext !== undefined && !loadingDown) {
      (promise = props.loadNext()) && setLoadingDown(true);
    }
    if (promise !== undefined) {
      const wrapperDom = (wrapperElement.current as unknown) as HTMLElement;
      const currentScrollHeight = wrapperDom.scrollHeight;
      promise
        ?.then(() => {
          if (wrapperDom.scrollHeight <= wrapperDom.clientHeight && [hasNext, hasPrev].includes(false)) {
            setMountedKey(`${Date.now()}`);
          }
        })
        ?.catch(() => {
          direction === "UP" ? setHasPrev(false) : setHasNext(false);
        })
        ?.finally(() => {
          if (direction === "UP") {
            wrapperDom.scrollTop = wrapperDom.scrollHeight - currentScrollHeight;
          }
          if (direction === "UP") {
            setLoadingTop(false);
          } else if (direction === "DOWN") {
            setLoadingDown(false);
          }
        });
    }
  };

  const loadToTop: (inView: boolean) => false | void = (inView: boolean) => inView && loadMore("UP");
  const loadToBottom: (inView: boolean) => false | void = (inView: boolean) => inView && loadMore("DOWN");

  return (
    <div className={styles.scroll_container} ref={wrapperElement}>
      <InView key={`up_${mountedKey || props.mountedKey}`} onChange={loadToTop} className={styles.loading_container} children={loadingUp && <LinearProgress />} />
      <>{props.children}</>
      <InView key={`down_${mountedKey || props.mountedKey}`} onChange={loadToBottom} className={styles.loading_container} children={loadingDown && <LinearProgress />} />
    </div>
  );
}, shallowEqual);
