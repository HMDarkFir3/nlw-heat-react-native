import React from "react";
import { ActivityIndicator } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";

//styles
import { Container, Icon, Title, DisabledButton } from "./styles";

//interfaces
interface Props extends RectButtonProps {
  title: string;
  color: string;
  backgroundColor: string;
  icon?: React.ComponentProps<typeof Icon>["name"];
  isLoading?: boolean;
}

export default function Button(props: Props) {
  const {
    title,
    backgroundColor,
    color,
    icon,
    isLoading = false,
    ...rest
  } = props;

  return (
    <>
      {isLoading ? (
        <DisabledButton backgroundColor={backgroundColor}>
          <ActivityIndicator size={24} color={color} />
        </DisabledButton>
      ) : (
        <Container backgroundColor={backgroundColor} {...rest}>
          <Icon name={icon} />

          <Title color={color}>{title}</Title>
        </Container>
      )}
    </>
  );
}
