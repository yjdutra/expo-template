import styled from "styled-components/native";
import { Platform } from "react-native";
import { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${Platform.OS === "ios" ? "60px" : "40px"} 16px 16px 16px;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.card};
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text};
`;

export const Right = styled.View`
  flex-direction: row;
  align-items: center;
`;
