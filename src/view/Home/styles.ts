import { vs } from 'react-native-size-matters';
import styled from 'styled-components/native';

import Text from '../../components/Text';

export const ContainerImageBack = styled.ImageBackground`
  flex: 1;
`;

export const ContainerText = styled(Text)``;

export const ContainerButton = styled.View`
  position: absolute;
  bottom: 1px;
  right: 10px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingBottom: vs(120) },
})`
  width: 100%;
  padding: 0px 30px;
  margin-top: 5px;
`;
