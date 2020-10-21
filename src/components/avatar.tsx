import React, { FC, memo } from "react";
import { shallowEqual } from "../libs/shallowEqual";
import { direction } from "../themes";
import styles from "./avatar.module.scss";

export enum AvatarSizeType {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

export type AvatarProps = {
  initials: string;
  unreadCount?: number;
  avatar?: string;
  color: string;
  size?: AvatarSizeType;
};

const AvatarComponent: FC<AvatarProps> = (props) => {
  return (
    <div
      className={`${styles.avatar} ${props.size === AvatarSizeType.SMALL && styles.small} ${props.size === AvatarSizeType.LARGE && styles.large} ${direction === "rtl" ? "ml-2" : "mr-2"}`}
      style={{
        backgroundColor: props.color,
        backgroundImage: `url('${props.avatar}')`,
      }}
    >
      {props.unreadCount !== undefined && props.unreadCount > 0 && <span className={`small ${styles.avatar_badge}`}>{props.unreadCount}</span>}
      <span className="text-uppercase">{props.avatar === undefined && props.initials}</span>
    </div>
  );
};

export default memo(AvatarComponent, shallowEqual);
