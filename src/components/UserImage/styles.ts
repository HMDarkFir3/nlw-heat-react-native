import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import { RFValue } from "react-native-responsive-fontsize";

interface GradientProps {
  containerSize: number;
}

interface UserAvatarProps {
  avatarSize: number;
}

export const Gradient = styled(LinearGradient)<GradientProps>`
  align-items: center;
  justify-content: center;

  width: ${({ containerSize }) => RFValue(containerSize)}px;
  height: ${({ containerSize }) => RFValue(containerSize)}px;

  border-radius: ${({ containerSize }) => containerSize / 2}px;
`;

export const UserAvatar = styled.Image<UserAvatarProps>`
  width: ${({ avatarSize }) => RFValue(avatarSize)}px;
  height: ${({ avatarSize }) => RFValue(avatarSize)}px;

  border-width: 4px;
  border-radius: ${({ avatarSize }) => avatarSize / 2}px;
  border-color: ${({ theme }) => theme.colors.black_secondary};
`;
