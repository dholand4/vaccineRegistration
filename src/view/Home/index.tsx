import { useNavigation } from '@react-navigation/native';
import React from 'react';

import Card from '~/components/Card';
import Header from '~/components/Header';

import { useUserContext } from '~/providers/user';

import background from '../../assets/images/background_black.png';
import ButtonScreen from '../../components/ButtonScreen';
import { REGISTERCITIZEN_SCREEN } from '../../constants/routes';

import * as Styles from './styles';

function Home() {
  const navigation = useNavigation();
  const { listCitizens } = useUserContext();

  function goToRegisterCitizen() {
    navigation.navigate(REGISTERCITIZEN_SCREEN);
  }

  const renderItem = ({ item }: any) => {
    return <Card item={item} />;
  };

  return (
    <Styles.ContainerImageBack source={background}>
      <Header />
      <Styles.List
        data={listCitizens}
        extraData={listCitizens}
        renderItem={renderItem}
        initialNumToRender={150}
      />
      <Styles.ContainerButton>
        <ButtonScreen action={goToRegisterCitizen} text="+" />
      </Styles.ContainerButton>
    </Styles.ContainerImageBack>
  );
}

export default Home;
