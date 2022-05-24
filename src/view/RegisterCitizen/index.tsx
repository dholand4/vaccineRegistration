import { useFormik } from 'formik';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

import { useUserContext } from '~/providers/user';

import background from '../../assets/images/background_citizen.png';
import ButtonGlobal from '../../components/ButtonGlobal';
import { mask } from '../../utils/validations';
import validationSchema from './validations';

import * as Styles from './styles';

type FormProps = {
  name: string;
  cpf: string;
  birthdate: Date;
  vaccine: string;
  dose: string;
};

function RegisterCitizen() {
  const { Colors } = useContext(ThemeContext);
  const { registerCitizen } = useUserContext();

  function registerCitizens(form: FormProps) {
    registerCitizen({
      name: form.name,
      cpf: form.cpf,
      birthDate: form.birthdate,
      vaccineName: form.vaccine,
      vaccineDose: form.dose,
    });
  }

  const { handleSubmit, handleChange, setFieldValue, values, errors } =
    useFormik({
      initialValues: {
        name: '',
        cpf: '',
        birthdate: '',
        vaccine: '',
        dose: '',
      },
      validationSchema,

      onSubmit: registerCitizens,
    });

  return (
    <Styles.ContainerImageBack source={background}>
      <Styles.ContainerForm>
        <Styles.TextInfo> Nome completo</Styles.TextInfo>
        <Styles.InputText
          placeholder="Digite o nome completo"
          value={values.name}
          onChangeText={handleChange('name')}
          placeholderTextColor={Colors.gray_screen}
          error={errors.name}
        />

        <Styles.TextInfo> CPF</Styles.TextInfo>
        <Styles.InputText
          placeholder="000.000.000-00"
          value={values.cpf}
          onChangeText={(value: any) => {
            setFieldValue('cpf', value ? mask.cpf(value) : value);
          }}
          placeholderTextColor={Colors.gray_screen}
          keyboardType="numeric"
          maxLength={14}
          error={errors.cpf}
        />

        <Styles.TextInfo> Data de nascimento</Styles.TextInfo>
        <Styles.InputText
          placeholder="00/00/0000"
          value={values.birthdate}
          onChangeText={(value: any) => {
            setFieldValue('birthdate', value ? mask.birthdate(value) : value);
          }}
          placeholderTextColor={Colors.gray_screen}
          keyboardType="numeric"
          maxLength={10}
          error={errors.birthdate}
        />
        <Styles.TextInfo> Tipo de vacina</Styles.TextInfo>
        <Styles.InputText
          placeholder="Escolha o tipo de vacina"
          value={values.vaccine}
          onChangeText={handleChange('vaccine')}
          placeholderTextColor={Colors.gray_screen}
          error={errors.vaccine}
        />

        <Styles.TextInfo> Dose da vacina</Styles.TextInfo>
        <Styles.InputText
          placeholder="Primeira ou Segunda dose?"
          value={values.dose}
          onChangeText={handleChange('dose')}
          placeholderTextColor={Colors.gray_screen}
          keyboardType="numeric"
          error={errors.dose}
          maxLength={1}
        />
        <Styles.ContainerButton>
          <ButtonGlobal action={handleSubmit} text="Cadastrar Cidadão" />
        </Styles.ContainerButton>
      </Styles.ContainerForm>
    </Styles.ContainerImageBack>
  );
}

export default RegisterCitizen;
