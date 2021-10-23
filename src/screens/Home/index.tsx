import React from "react";

//hooks
import { useAuth } from "../../hooks/useAuth";

//components
import Header from "../../components/Header";
import MessageList from "../../components/MessageList";
import SignInBox from "../../components/SignInBox";
import SendMessageForm from "../../components/SendMessageForm";

//styles
import { Container } from "./styles";

export default function Home() {
  const { user } = useAuth();

  return (
    <Container>
      <Header />
      <MessageList />
      {user ? <SendMessageForm /> : <SignInBox />}
    </Container>
  );
}
