import React, { useState } from "react";
import { Alert, Keyboard } from "react-native";
import { useTheme } from "styled-components";

//services
import api from "../../services/api";

//components
import Button from "../Button";

//styles
import { Container, Input } from "./styles";

export default function SendMessageForm() {
  const [message, setMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);

  const theme = useTheme();

  async function handleMessageSubmit() {
    const messageFormatted = message.trim();

    if (messageFormatted.length > 0) {
      setSendingMessage(true);

      await api.post("/messages", { message: messageFormatted });

      setMessage("");
      Keyboard.dismiss();
      setSendingMessage(false);

      Alert.alert("Mensagem enviada com sucesso!");
    } else {
      Alert.alert("Atenção!", "Escreva uma mensagem para enviar");
    }
  }

  return (
    <Container>
      <Input
        style={{ textAlignVertical: "top" }}
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento"
        multiline={true}
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        editable={!sendingMessage}
      />

      <Button
        title="ENVIAR MENSAGEM"
        backgroundColor={theme.colors.pink}
        color={theme.colors.white}
        isLoading={sendingMessage}
        onPress={handleMessageSubmit}
      />
    </Container>
  );
}
