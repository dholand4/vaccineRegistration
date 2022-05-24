import { vs } from 'react-native-size-matters';
import styled from 'styled-components/native';

import Input from '../../components/Input';
import Text from '../../components/Text';

export const ContainerImageBack = styled.ImageBackground`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.white};
`;

export const ContainerForm = styled.View`
  justify-content: center;
  padding: 0px 35px;
`;

export const ContainerButton = styled.View`
  padding-top: 15px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const TextInfo = styled(Input)``;

export const TextText = styled(Text)`
  font-size: 15px;
  margin-top: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.Colors.black};
`;

export const ContainerImage = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  margin-top: 20px;
  height: ${vs(200)}px;
  width: ${vs(235)}px;
`;
