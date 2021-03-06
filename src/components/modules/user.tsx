import { Button } from "@material-ui/core";
import React, { DOMAttributes, FC, memo } from "react";
import { shallowEqual } from "../../libs/shallowEqual";
import AvatarComponent, { AvatarProps } from "../avatar";
import styles from "./user.module.scss";

export type UserProps = AvatarProps & {
  id?: string;
  name: string;
  time?: string;
  message?: string;
  onClick?: DOMAttributes<HTMLElement>["onClick"];
};

const UserComponent: FC<UserProps> = (props) => {
  return (
    <Button fullWidth className={`justify-content-start font-weight-normal text-nowrap ${styles.user}`} onClick={props.onClick}>
      <div className="col-auto">
        <AvatarComponent initials={props.initials} unreadCount={props.unreadCount} avatar={props.avatar} color={props.color} size={props.size} />
      </div>
      <div className={`col text-start ${styles.contents}`}>
        <div className="d-flex justify-content-between">
          <h3 className="my-0 text-ellipsis text-capitalize">{props.name}</h3>
          {props.time !== undefined && <time className="font-weight-light small d-none d-sm-block">{props.time}</time>}
        </div>
        {props.message !== undefined && <p className="my-0 font-weight-light text-ellipsis text-capitalize">{props.message}</p>}
      </div>
    </Button>
  );
};

export default memo(UserComponent, shallowEqual);
