import { vs } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.Colors.white};
`;

export const LoadingIndicator = styled.ActivityIndicator``;

export const ContainerImage = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  height: ${vs(400)}px;
  width: ${vs(400)}px;
`;
