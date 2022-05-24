import styled from 'styled-components/native';

import Input from '../../components/Input';
import Text from '../../components/Text';

export const ContainerImageBack = styled.ImageBackground`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.white};
  justify-content: center;
  align-items: center;
`;

export const ContainerForm = styled.View`
  justify-content: center;
  align-items: flex-start;
  padding: 0px 30px;
  width: 90%;
`;

export const ContainerButton = styled.View`
  padding-top: 30px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const InputText = styled(Input)``;

export const TextInfo = styled(Text)`
  font-size: 15px;
  margin-top: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.Colors.black};
`;

export const ButtonText = styled(Text)`
  font-size: 15px;
  font-weight: bold;
`;
