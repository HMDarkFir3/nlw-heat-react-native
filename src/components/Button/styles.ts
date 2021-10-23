import { ActivityIndicator } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

import { RFValue } from "react-native-responsive-fontsize";

//interfaces
interface ContainerProps {
  backgroundColor: string;
}

interface TitleProps {
  color: string;
}

export const Container = styled(RectButton)<ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 48px;

  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Icon = styled(AntDesign)`
  margin-right: 12px;

  font-size: ${RFValue(24)}px;
`;

export const Title = styled.Text<TitleProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ color }) => color};
`;

export const DisabledButton = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 48px;

  background-color: ${({ backgroundColor }) => backgroundColor};
`;
