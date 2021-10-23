import React from "react";

//components
import UserImage from "../../components/UserImage";

//styles
import { Container, Footer, MessageText, UserName } from "./styles";

//interfaces
export interface MessageProps {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
}

interface Props {
  data: MessageProps;
}

export default function Message(props: Props) {
  const { data } = props;

  return (
    <Container
      from={{ opacity: 1, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 700 }}
    >
      <MessageText>{data.text}</MessageText>

      <Footer>
        <UserImage imageUri={data.user.avatar_url} sizes="small" />

        <UserName>{data.user.name}</UserName>
      </Footer>
    </Container>
  );
}
