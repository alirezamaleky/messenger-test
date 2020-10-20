import React, { FC } from "react";
import { useParams } from "react-router-dom";
import MainComponent from "../components/main";

export type ChatParamsType = {
  id: string | undefined;
};

const Main: FC = () => {
  const { id } = useParams<ChatParamsType>();
  const sendMessage = (content: string) => {
    // TODO
  };

  return <MainComponent sendMessage={sendMessage} isInChat={id !== undefined} />;
};

export default Main;
