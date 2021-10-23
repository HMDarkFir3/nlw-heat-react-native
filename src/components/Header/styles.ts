import styled from "styled-components/native";

import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-top: ${getStatusBarHeight() + 16}px;
  padding: 0 20px;
  padding-bottom: 16px;
`;

export const SignOutWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SignOutButton = styled(BorderlessButton)``;

export const SignOutText = styled.Text`
  margin-right: 20px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.white};
`;
