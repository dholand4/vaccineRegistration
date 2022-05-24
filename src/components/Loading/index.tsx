import React from 'react';

import LogoLoading from '../../assets/images/img.png';

import * as Styles from './styles';

function Loading() {
  return (
    <Styles.Container>
      <Styles.ContainerImage>
        <Styles.Image source={LogoLoading} />
      </Styles.ContainerImage>
    </Styles.Container>
  );
}

export default Loading;
