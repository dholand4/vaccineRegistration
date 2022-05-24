import React, { memo } from 'react';

import { Container, ButtonText, Button } from './styles';

interface Props {
  text: string;
  action: () => void;
  color?: string;
  colorText?: string;
}

function ButtonScreen({ text, action, color, colorText }: Props) {
  return (
    <Container color={color}>
      <Button onPress={action}>
        <ButtonText colorText={colorText}>{text}</ButtonText>
      </Button>
    </Container>
  );
}

export default memo(ButtonScreen);
