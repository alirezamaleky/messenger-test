import { Button } from "@material-ui/core";
import React, { FC, memo } from "react";
import { shallowEqual } from "../libs/shallowEqual";
import AvatarComponent, { AvatarProps } from "./avatar";
import styles from "./user.module.scss";

export type UserProps = AvatarProps & {
  name: string;
  time?: string;
  message: string;
};

const UserComponent: FC<UserProps> = (props) => {
  return (
    <Button fullWidth className="justify-content-start font-weight-normal">
      <div className="col-auto">
        <AvatarComponent initials={props.initials} unreadCount={props.unreadCount} avatar={props.avatar} color={props.color} size={props.size} />
      </div>
      <div className={`col text-start ${styles.contents}`}>
        <div className="d-flex justify-content-between">
          <h3 className="my-0">{props.name}</h3>
          <time className="small">{props.time}</time>
        </div>
        <p className="my-0 text-ellipsis">{props.message}</p>
      </div>
    </Button>
  );
};

export default memo(UserComponent, shallowEqual);
