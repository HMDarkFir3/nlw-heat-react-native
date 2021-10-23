import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
  width: 100%;
  height: 184px;

  padding: 0 24px;
  padding-top: 16px;
  padding-bottom: ${getBottomSpace() + 16}px;

  background-color: ${({ theme }) => theme.colors.black_tertiary};
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray_primary,
}))`
  width: 100%;
  height: 88px;

  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.white};
`;
