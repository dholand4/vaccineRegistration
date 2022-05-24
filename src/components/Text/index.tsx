import React from 'react';
import type { TextProps } from 'react-native';

import * as Styles from './styles';

function NewText({ children, ...other }: TextProps) {
  return <Styles.Text {...other}>{children}</Styles.Text>;
}

export default NewText;
