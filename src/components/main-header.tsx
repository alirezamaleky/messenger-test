//
import { IconButton } from "@material-ui/core";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import React, { FC, memo } from "react";
import { shallowEqual } from "../libs/shallowEqual";
import { AsideStatusType } from "../store/theme/types";
import styles from "./main-header.module.scss";
import { UserProps } from "./user";

type Props = {
  toggleAside: () => void;
  asideStatus: AsideStatusType;
  isInChat: boolean;
  user: UserProps | undefined;
};

const MainHeaderComponent: FC<Props> = (props) => {
  return (
    <header className="shadow-sm">
      <div className={`d-flex justify-content-between align-items-center py-2 ${styles.header} ${props.isInChat ? "" : "d-sm-none"}`}>
        <IconButton className="d-block d-sm-none" onClick={props.toggleAside}>
          <MenuOutlinedIcon />
        </IconButton>
        <IconButton className={props.asideStatus ? "d-block" : "d-none"} onClick={props.toggleAside}>
          <CloseOutlinedIcon />
        </IconButton>
      </div>
    </header>
  );
};

export default memo(MainHeaderComponent, shallowEqual);
