import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { PopoverProps } from "@material-ui/core/Popover";
import Brightness4OutlinedIcon from "@material-ui/icons/Brightness4Outlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import React, { FC, memo, useState } from "react";
import "../assets/scss/index.scss";
import { shallowEqual } from "../libs/shallowEqual";
import { direction } from "../themes";
import styles from "./aside-header.module.scss";
import { RoundedTextField } from "./modules/inputs";

const AsideHeader: FC = () => {
  const [anchorEl, setAnchorEl] = useState<PopoverProps["anchorEl"] | undefined>(undefined);
  const closeMenu = () => setAnchorEl(undefined);

  return (
    <header className={`shadow-sm d-flex justify-content-between align-items-center p-2 ${styles.header}`}>
      <IconButton className={direction === "rtl" ? "ml-1" : "mr-1"} onClick={(e) => setAnchorEl(e.currentTarget)}>
        <MenuOutlinedIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} keepMounted open={anchorEl !== undefined} onClose={closeMenu}>
        <MenuItem onClick={closeMenu}>پروفایل</MenuItem>
        <MenuItem onClick={closeMenu}>تنظیمات</MenuItem>
        <MenuItem onClick={closeMenu}>خروج</MenuItem>
      </Menu>
      <RoundedTextField placeholder="جستجو" variant="outlined" fullWidth />
      <IconButton className={direction === "rtl" ? "mr-1" : "ml-1"}>
        <Brightness4OutlinedIcon />
      </IconButton>
    </header>
  );
};

export default memo(AsideHeader, shallowEqual);
