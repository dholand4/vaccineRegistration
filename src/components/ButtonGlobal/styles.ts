import styled from 'styled-components/native';

import { sfs } from '../../utils/responsibleText';

interface ContainerProps {
  color?: string;
}

interface ButtonTextProps {
  colorText?: string;
}

export const Container = styled.View<ContainerProps>`
  width: 60%;
  height: 45px;
  background: ${({ theme, color }) => color || theme.Colors.background_color};
  border-radius: 15px;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: ${sfs(16)}px;
  font-weight: 700;
  line-height: 19px;
  color: ${({ theme, colorText }) => colorText || theme.Colors.white};
`;
