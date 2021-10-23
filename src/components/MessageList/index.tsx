import React, { useState, useEffect } from "react";
import io from "socket.io-client";

//services
import api from "../../services/api";

//components
import Message, { MessageProps } from "../Message";

//styles
import { Container } from "./styles";

let messagesQueue: MessageProps[] = [];

const socket = io(String(api.defaults.baseURL));
socket.on("new_message", (newMessage) => {
  messagesQueue.push(newMessage);
});

export default function MessageList() {
  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    async function fetchMessages() {
      const response = await api.get<MessageProps[]>("/messages/last3");

      setCurrentMessages(response.data);
    }

    fetchMessages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setCurrentMessages((prevState) => [
          messagesQueue[0],
          prevState[0],
          prevState[1],
        ]);

        messagesQueue.shift();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container keyboardShouldPersistTaps="never">
      {currentMessages.map((item) => (
        <Message key={item.id} data={item} />
      ))}
    </Container>
  );
}
