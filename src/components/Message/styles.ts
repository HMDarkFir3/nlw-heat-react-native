import { MotiView } from "moti";
import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(MotiView)`
  width: 100%;

  margin-bottom: 36px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;

  width: 100%;
`;

export const MessageText = styled.Text`
  margin-bottom: 12px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 20px;
`;

export const UserName = styled.Text`
  margin-left: 16px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.white};
`;
