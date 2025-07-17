import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text};
`;

export const CodeImage = styled.Image`
  width: 200px;
  height: 200px;
  margin-top: 16px;
  border-radius: 20px;
`;
