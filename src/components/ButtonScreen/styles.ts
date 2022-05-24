import styled from 'styled-components/native';

import { sfs } from '../../utils/responsibleText';

interface ContainerProps {
  color?: string;
}

interface ButtonTextProps {
  colorText?: string;
}

export const Container = styled.View.attrs(({ theme }) => ({
}))<ContainerProps>`
  /* position: absolute; */
  width: 60px;
  height: 60px;
  background: ${({ theme, color }) => color || theme.Colors.light_green};
  border-radius: 100px;
  margin-bottom: 35px;
  justify-content: center;
  align-items: center;

`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: ${sfs(30)}px;
  color: ${({ theme, colorText }) => colorText || theme.Colors.white};
`;
