import React from "react";
import { Alert } from "react-native";

//hooks
import { useAuth } from "../../hooks/useAuth";

//components
import UserImage from "../../components/UserImage";

//styles
import {
  Container,
  SignOutWrapper,
  SignOutButton,
  SignOutText,
} from "./styles";

//img
import LogoSvg from "../../assets/logo.svg";

export default function Header() {
  const { signOut, user } = useAuth();

  function handleSignOut() {
    Alert.alert("Atenção!", "Deseja realmente sair do aplicativo?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => signOut(),
      },
    ]);
  }

  return (
    <Container>
      <LogoSvg />

      <SignOutWrapper>
        <SignOutButton onPress={handleSignOut}>
          <SignOutText>Sair</SignOutText>
        </SignOutButton>

        <UserImage imageUri={user?.avatar_url} />
      </SignOutWrapper>
    </Container>
  );
}
