import React from "react";
import { useTheme } from "styled-components";

//hooks
import { useAuth } from "../../hooks/useAuth";

//components
import Button from "../../components/Button";

//styles
import { Container } from "./styles";

export default function SignInBox() {
  const theme = useTheme();

  const { signIn, isSigned } = useAuth();

  return (
    <Container>
      <Button
        title="ENTRAR COM GITHUB"
        backgroundColor={theme.colors.yellow}
        color={theme.colors.black_primary}
        icon="github"
        isLoading={isSigned}
        onPress={signIn}
      />
    </Container>
  );
}
