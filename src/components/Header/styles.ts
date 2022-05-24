import { s, vs } from 'react-native-size-matters';
import styled from 'styled-components/native';

import Icon from '../../components/Icon';
import Text from '../../components/Text';

import { sfs } from '../../utils/responsibleText';

interface ContainerProps {
  backgroundColor?: string;
}

interface TitleProps {
  colorItems?: string;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  padding: 30px ${s(10)}px 10px ${s(40)}px;
  width: 100%;
`;

export const Title = styled(Text)<TitleProps>`
  font-size: ${sfs(15)}px;
  color: ${({ theme, colorItems }) => colorItems || theme.Colors.white};
  align-items: center;
  margin-right: 65px;
`;

export const IconBack = styled(Icon).attrs(({ theme, colorButtonBack }) => ({
  name: 'logout',
  color: colorButtonBack || theme.Colors.white,
}))`
  font-size: ${sfs(25)}px;
`;

export const Touchable = styled.TouchableOpacity``;

export const Image = styled.Image`
  height: ${vs(50)}px;
  width: ${vs(50)}px;
  margin-right: 10px;
`;
