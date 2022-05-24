import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React, { memo } from 'react';

import person from '../../assets/images/person.png';
import { useUserContext } from '../../providers/user';

import { Container, IconBack, Image, Title, Touchable } from './styles';

interface HeaderProps extends NativeStackHeaderProps {
  options: {
    backgroundColor?: string;
    colorItems?: string;
    title?: string;
    rightButton?: boolean;
    iconRight?: string;
    typeIcon?: string;
    colorIcon?: string;
    colorButtonBack?: string;
    actionRightButton?: () => void;
  };
}

function Header({ options }: HeaderProps) {
  const { userData } = useUserContext();

  const { LogofLogin } = useUserContext();
  function Logof() {
    LogofLogin();
  }

  return (
    <Container backgroundColor={options?.backgroundColor}>
      <Image source={person} />
      <Title colorItems={options?.colorItems} numberOfLines={1}>
        {options?.title || `Bem-Vindo, ${userData?.user.name}`}
      </Title>
      <Touchable onPress={() => Logof()}>
        <IconBack lib="MI" colorButtonBack={options?.colorButtonBack} />
      </Touchable>
    </Container>
  );
}

export const headerOption = {
  header: (props: any) => <Header {...props} />,
};

export default memo(Header);
