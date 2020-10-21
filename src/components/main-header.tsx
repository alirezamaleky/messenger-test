import { IconButton } from "@material-ui/core";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import React, { FC, memo } from "react";
import { ROUTE_ROOT } from "../constants/routes";
import { memoryHistory } from "../index";
import { shallowEqual } from "../libs/shallowEqual";
import { AsideStatusType } from "../store/theme/types";
import { AvatarSizeType } from "./avatar";
import styles from "./main-header.module.scss";
import UserComponent, { UserProps } from "./modules/user";

type Props = {
  openUserPopup: () => void;
  toggleAside: () => void;
  asideStatus: AsideStatusType;
  isInChat: boolean;
  user: UserProps | undefined;
};

const MainHeaderComponent: FC<Props> = (props) => {
  return (
      <header className="shadow-sm">
        <div className={`d-flex justify-content-between align-items-center py-2 ${styles.header} ${props.isInChat ? "" : "d-sm-none"}`}>
          {props.isInChat && (
              <>
                <IconButton onClick={() => memoryHistory.push(ROUTE_ROOT)}>
                  <CloseOutlinedIcon />
                </IconButton>
                <UserComponent
                    onClick={props.openUserPopup}
                    size={AvatarSizeType.SMALL}
                    initials={props.user?.initials || ""}
                    avatar={props.user?.avatar}
                    color={props.user?.color || ""}
                    name={props.user?.name || ""}
                    message={props.user?.message}
                />
              </>
          )}
          <IconButton className="d-block d-sm-none" onClick={props.toggleAside}>
            {props.asideStatus ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
          </IconButton>
        </div>
      </header>
  );
};

export default memo(MainHeaderComponent, shallowEqual);
