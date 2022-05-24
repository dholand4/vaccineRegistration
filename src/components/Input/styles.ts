import styled from 'styled-components/native';

import Icon from '~/components/Icon';

import { sfs } from '../../utils/responsibleText';
import Text from '../Text';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 2px 10px;
  margin-top: 3px;
  margin-bottom: 10px;
  border-radius: 15px;
  border-width: 1px;
  background-color: ${({ theme }) => theme.Colors.back_input};
  border-color: ${({ theme }) => theme.Colors.background_color};

  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.TextInput`
  font-size: 15px;
  color: ${({ theme }) => theme.Colors.black};
`;

export const ErrorText = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.Colors.red};
  margin-top: -10px;
  margin-left: 3px;
  margin-bottom: -5px;
`;

export const IconComp = styled(Icon)`
  font-size: ${sfs(20)}px;
  color: ${({ theme }) => theme.Colors.black};
`;
export const ContainerIcon = styled.TouchableOpacity``;
