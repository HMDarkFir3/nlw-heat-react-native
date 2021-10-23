import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 136,
    paddingBottom: 184,
  },
})`
  flex: 1;

  padding: 0 20px;
`;

export const Title = styled.Text`
  color: #ff0000;
`;
