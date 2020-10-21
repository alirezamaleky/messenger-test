import { IconButton } from "@material-ui/core";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import React, { FC, memo } from "react";
import MainMessages from "../containers/main-messages";
import { shallowEqual } from "../libs/shallowEqual";
import styles from "./main-editor.module.scss";
import MainTextareaComponent from "./main-textarea";

type Props = {
  sendMessage: (content: string) => void;
  isInChat: boolean;
};

const MainEditorComponent: FC<Props> = (props) => {
  return (
    <div className={`shadow d-flex align-items-end ${styles.editor} ${props.isInChat ? "" : "invisible"}`} dir="ltr">
      <IconButton color="primary">
        <EmojiEmotionsOutlinedIcon />
      </IconButton>
      <MainMessages />
      <MainTextareaComponent sendMessage={props.sendMessage} />
    </div>
  );
};

export default memo(MainEditorComponent, shallowEqual);
