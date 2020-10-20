import { IconButton } from "@material-ui/core";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import React, { FC, memo } from "react";
import { shallowEqual } from "../libs/shallowEqual";
import { AsideStatusType } from "../store/theme/types";
import styles from "./main-header.module.scss";

type Props = {
  toggleAside: () => void;
  asideStatus: AsideStatusType;
};

const MainHeaderComponent: FC<Props> = (props) => {
  return (
    <header className={`shadow-sm d-flex justify-content-between align-items-center p-2 ${styles.header}`}>
      <IconButton className="d-block d-md-none" onClick={props.toggleAside}>
        <MenuOutlinedIcon />
      </IconButton>
      <IconButton className={props.asideStatus ? "d-block" : "d-none"} onClick={props.toggleAside}>
        <CloseOutlinedIcon />
      </IconButton>
    </header>
  );
};

export default memo(MainHeaderComponent, shallowEqual);
