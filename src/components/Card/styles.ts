import { vs } from 'react-native-size-matters';
import styled from 'styled-components/native';

import Text from '~/components/Text';

export const Card1 = styled.View`
  flex: 1;
  border-radius: 15px;
  padding: 22px;
  margin: 18px 0px;
  background-color: ${({ theme }) => theme.Colors.white};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerInfo = styled.View``;

export const ContainerVaccine = styled.View``;

export const TextName = styled(Text)`
  font-size: 17px;
  margin-right: 15px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.Colors.black};
`;
export const TextCpf = styled(Text)`
  font-size: 13px;
  color: ${({ theme }) => theme.Colors.black};
`;

export const TextDose = styled(Text)`
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.Colors.black};
`;

export const TextDate = styled(Text)`
  font-size: 13px;
  color: ${({ theme }) => theme.Colors.black};
`;

export const Image = styled.Image`
  height: ${vs(35)}px;
  width: ${vs(35)}px;
  margin-top: 10px;
  margin-bottom: 5px;
`;
