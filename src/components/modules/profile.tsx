import { Dialog, IconButton } from "@material-ui/core";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import React, { FC, memo } from "react";
import { ROUTE_MESSENGER_CHAT } from "../../constants/routes";
import { memoryHistory } from "../../index";
import { shallowEqual } from "../../libs/shallowEqual";
import { PopupUserType } from "../../store/theme/types";
import AvatarComponent, { AvatarSizeType } from "../avatar";
import styles from "./profile.module.scss";

type Props = {
  member: PopupUserType;
  closePopup: () => void;
};

const ProfilePopup: FC<Props> = (props) => {
  return (
    <Dialog onClose={props.closePopup} open={props.member !== undefined} maxWidth="xs">
      <div className="d-flex justify-content-center pt-4">
        <AvatarComponent initials={props.member?.initials || "A"} avatar={props.member?.avatar} color={props.member?.color || "teal"} size={AvatarSizeType.LARGE} />
      </div>
      <div className={`text-center text-nowrap p-2 ${styles.content}`}>
        <h3 className="mt-3 mb-0">{props.member?.name}</h3>
        <time className="small font-weight-lighter">{props.member?.message}</time>
        <div className="d-flex justify-content-center mt-3">
          <IconButton
            color="primary"
            onClick={() => {
              memoryHistory.push(ROUTE_MESSENGER_CHAT.replace(":id?", String(props.member?.id)), {
                id: props.member?.id,
                initials: props.member?.name.charAt(0),
                avatar: props.member?.avatar,
                color: props.member?.color,
                name: props.member?.name,
                message: props.member?.message,
              });
              props.closePopup();
            }}
          >
            <ChatOutlinedIcon />
          </IconButton>
          <IconButton color="primary">
            <PhoneOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </Dialog>
  );
};

export default memo(ProfilePopup, shallowEqual);
