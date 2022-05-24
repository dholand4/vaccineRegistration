import React, { memo } from 'react';

import * as S from './styles';

interface Props {
  color?: string;
  barStyleDark?: boolean;
}

function StatusBar({ color, barStyleDark }: Props) {
  return <S.StatusBar color={color} barStyleDark={barStyleDark} />;
}

export default memo(StatusBar);
