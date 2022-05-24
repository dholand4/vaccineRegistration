import React from 'react';
import AD from 'react-native-vector-icons/AntDesign';
import ENTY from 'react-native-vector-icons/Entypo';
import FW from 'react-native-vector-icons/FontAwesome';
import FW5 from 'react-native-vector-icons/FontAwesome5';
import FD from 'react-native-vector-icons/Foundation';
import ION from 'react-native-vector-icons/Ionicons';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import MI from 'react-native-vector-icons/MaterialIcons';
import SL from 'react-native-vector-icons/SimpleLineIcons';

const IconType = (lib: string) => {
  switch (lib) {
    case 'FW5':
      return FW5;
    case 'FD':
      return FD;
    case 'AD':
      return AD;
    case 'FW':
      return FW;
    case 'MI':
      return MI;
    case 'MCI':
      return MCI;
    case 'SL':
      return SL;
    case 'ION':
      return ION;
    case 'ENTY':
      return ENTY;
    default:
      return FW;
  }
};

const index = ({ children, lib, ...other }: any) => {
  const IconComp = IconType(lib);

  return <IconComp {...other}>{children}</IconComp>;
};

export default index;
