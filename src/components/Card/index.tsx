import React, { memo } from 'react';

import type { ECitizens } from '~/@types/ECitizens';
import vaccine from '~/assets/images/vaccine.png';
import { mask } from '~/utils/validations';

import {
  Card1,
  Image,
  ContainerInfo,
  ContainerVaccine,
  TextCpf,
  TextDate,
  TextName,
  TextDose,
} from './styles';

interface CardProps {
  item: ECitizens;
}

function Card({ item }: CardProps) {
  const { name, cpf, birthDate, vaccineName, vaccineDose } = item;

  return (
    <Card1>
      <ContainerInfo>
        <TextName>{name}</TextName>
        <TextCpf>CPF: {mask.cpf(cpf)}</TextCpf>
        <TextDate>{birthDate}</TextDate>
      </ContainerInfo>
      <ContainerVaccine>
        <Image source={vaccine} />
        <TextDose>DOSE {vaccineDose}</TextDose>
      </ContainerVaccine>
    </Card1>
  );
}

export default memo(Card);
