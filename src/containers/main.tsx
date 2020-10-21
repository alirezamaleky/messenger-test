import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainComponent from "../components/main";
import { GET_MESSAGES } from "../constants/webservices";
import { restHandler } from "../libs/rest";

export type MessagesType = Array<{
  id: string;
  time: number;
  name: string;
  text: string;
  isMine: boolean;
}>;

export type ChatParamsType = {
  id: string | undefined;
};

const Main: FC = () => {
  const { id } = useParams<ChatParamsType>();
  const [messages, setMessages] = useState<MessagesType>([]);

  const sendMessage = (content: string) => {
    setMessages((state: any) => [
      ...state,
      {
        id: Date.now(),
        time: Math.floor(Date.now() / 1000),
        name: "Alireza Maleki",
        text: content,
        isMine: true,
      },
    ]);
  };

  useEffect(() => {
    restHandler({
      url: GET_MESSAGES,
    }).then((res) => setMessages(res.data));
  }, []);

  return <MainComponent messages={messages} sendMessage={sendMessage} isInChat={id !== undefined} />;
};

export default Main;
