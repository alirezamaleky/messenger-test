import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { PopoverProps } from "@material-ui/core/Popover";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import Brightness4OutlinedIcon from "@material-ui/icons/Brightness4Outlined";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import React, { FC, memo, useState } from "react";
import { shallowEqual } from "../libs/shallowEqual";
import { direction } from "../themes";
import styles from "./aside-header.module.scss";
import { RoundedTextField } from "./modules/inputs";

type Props = {
  toggleTheme: () => void;
};

const AsideHeaderComponent: FC<Props> = (props) => {
  const [anchorEl, setAnchorEl] = useState<PopoverProps["anchorEl"] | undefined>(undefined);
  const closeMenu = () => setAnchorEl(undefined);

  return (
    <header className={`shadow-sm d-flex justify-content-between align-items-center py-2 ${styles.header}`}>
      <IconButton className={direction === "rtl" ? "ml-1" : "mr-1"} onClick={(e) => setAnchorEl(e.currentTarget)}>
        <MenuOutlinedIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} keepMounted open={anchorEl !== undefined} onClose={closeMenu}>
        <MenuItem onClick={closeMenu}>
          <AccountCircleOutlinedIcon color="action" />
          <span className="mx-3">پروفایل</span>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <SettingsOutlinedIcon color="action" />
          <span className="mx-3">تنظیمات</span>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <HighlightOffOutlinedIcon color="action" />
          <span className="mx-3">خروج</span>
        </MenuItem>
      </Menu>
      <RoundedTextField placeholder="جستجو" variant="outlined" fullWidth />
      <IconButton className={direction === "rtl" ? "mr-1" : "ml-1"} onClick={props.toggleTheme}>
        <Brightness4OutlinedIcon />
      </IconButton>
    </header>
  );
};

export default memo(AsideHeaderComponent, shallowEqual);
