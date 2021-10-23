import React from "react";
import { useTheme } from "styled-components";

//styles
import { Gradient, UserAvatar } from "./styles";

//img
import avatarImg from "../../assets/avatar.png";

const SIZES = {
  small: {
    containerSize: 32,
    avatarSize: 28,
  },
  normal: {
    containerSize: 48,
    avatarSize: 42,
  },
};

const AVATAR_DEFAULT = UserAvatar.resolveAssetSource(avatarImg).uri;

interface Props {
  imageUri: string | undefined;
  sizes?: "small" | "normal";
}

export default function UserImage(props: Props) {
  const { imageUri, sizes = "normal" } = props;
  const { containerSize, avatarSize } = SIZES[sizes];

  const theme = useTheme();

  return (
    <Gradient
      colors={[theme.colors.pink, theme.colors.yellow]}
      start={{ x: 0, y: 0.8 }}
      end={{ x: 0.9, y: 1 }}
      containerSize={containerSize}
    >
      <UserAvatar
        source={{ uri: imageUri || AVATAR_DEFAULT }}
        avatarSize={avatarSize}
      />
    </Gradient>
  );
}
