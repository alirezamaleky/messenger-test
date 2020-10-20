import { IconButton } from "@material-ui/core";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import React, { FC, memo } from "react";
import { shallowEqual } from "../libs/shallowEqual";
import styles from "./main-editor.module.scss";
import MainTextareaComponent from "./main-textarea";

type Props = {
  sendMessage: (content: string) => void;
};

const MainEditorComponent: FC<Props> = (props) => {
  return (
    <div className={`d-flex align-items-end ${styles.editor}`} dir="ltr">
      <IconButton color="primary">
        <EmojiEmotionsOutlinedIcon />
      </IconButton>
      <MainTextareaComponent sendMessage={props.sendMessage} />
    </div>
  );
};

export default memo(MainEditorComponent, shallowEqual);
