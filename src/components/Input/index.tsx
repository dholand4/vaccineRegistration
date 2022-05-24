import React, { memo } from 'react';
import type { TextInputProps } from 'react-native';

import * as Styles from './styles';

interface Props extends TextInputProps {
  error?: string;
  iconName?: string;
  libIcon?: string;
  action?: () => void;
}

function Input({
  action,
  iconName,
  libIcon,
  children,
  error,
  ...other
}: Props) {
  return (
    <>
      <Styles.Container>
        <Styles.Input {...other}>{children}</Styles.Input>

        <Styles.ContainerIcon onPress={action}>
          <Styles.IconComp name={iconName} lib={libIcon} />
        </Styles.ContainerIcon>
      </Styles.Container>
      {error && <Styles.ErrorText>{error}</Styles.ErrorText>}
    </>
  );
}

export default memo(Input);
