import React, { FC } from "react";
import MainComponent from "../components/main";

const Main: FC = () => {
  const sendMessage = (content: string) => {
    // TODO
  };

  return <MainComponent sendMessage={sendMessage} />;
};

export default Main;
