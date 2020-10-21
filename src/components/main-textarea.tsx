import { IconButton } from "@material-ui/core";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import Draft, { Editor, EditorState } from "draft-js";
import React, { FC, memo, useEffect, useRef, useState } from "react";
import { hasPersianChar } from "../libs/data";
import { shallowEqual } from "../libs/shallowEqual";
import { direction } from "../themes";
import styles from "./main-textarea.module.scss";

type Props = {
  sendMessage: (content: string) => void;
};

const MainTextareaComponent: FC<Props> = (props) => {
  const editorRef = useRef(null);
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());

  // const insertText: (content: string) => void = (content: string) => {
  //   const newContent = Modifier.replaceText(editorState.getCurrentContent(), editorState.getSelection(), content);
  //   setEditorState(EditorState.push(editorState, newContent, "insert-characters"));
  //   setTimeout(() => (editorRef.current as any)?.focus(), 500);
  // };

  const handleSubmit: () => void = () => {
    setEditorState(EditorState.createEmpty());
    const text = editorState.getCurrentContent().getPlainText();
    if (text.trim().length > 0) {
      props.sendMessage(text);
    }
  };

  const changeDirection: () => void = () => {
    document.querySelectorAll(".public-DraftStyleDefault-ltr, .public-DraftStyleDefault-rtl").forEach((el) => {
      const p = el as HTMLElement;
      if (p.textContent === "" || hasPersianChar(p.textContent || "")) {
        p.style.direction = "rtl";
      } else {
        p.style.direction = "ltr";
      }
    });
  };

  const keyBindingFn = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) return "handle_submit";
    return Draft.getDefaultKeyBinding(e);
  };

  const handleKeyCommand = (command: string) => {
    if (command === "handle_submit") {
      handleSubmit();
      return "handled";
    }
    return "not-handled";
  };

  useEffect(() => changeDirection(), [editorState]);

  return (
    <>
      <div className={`col ${styles.textarea}`} onClick={() => (editorRef.current as any)?.focus()} dir={direction}>
        <Editor placeholder="بنویسید" ref={editorRef} editorState={editorState} onChange={setEditorState} keyBindingFn={keyBindingFn} handleKeyCommand={handleKeyCommand} />
      </div>
      <IconButton color="primary" onClick={handleSubmit}>
        <SendOutlinedIcon />
      </IconButton>
    </>
  );
};

export default memo(MainTextareaComponent, shallowEqual);
