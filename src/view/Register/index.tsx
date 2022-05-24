import { useFormik } from 'formik';
import React, { useContext } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { ThemeContext } from 'styled-components/native';

import { useUserContext } from '~/providers/user';

import background from '../../assets/images/background.png';
import Logo from '../../assets/images/img.png';
import ButtonGlobal from '../../components/ButtonGlobal';
import { mask } from '../../utils/validations';
import validationSchema from './validations';

import * as Styles from './styles';

type FormProps = {
  name: string;
  phone: string;
  password: string;
  email: string;
};

function Register() {
  const { Colors } = useContext(ThemeContext);
  const { registerUser } = useUserContext();

  function goToLogin(form: FormProps) {
    registerUser({
      name: form.name,
      password: form.password,
      email: form.email,
    });
  }

  const { handleSubmit, handleChange, setFieldValue, values, errors } =
    useFormik({
      initialValues: {
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      validationSchema,
      onSubmit: goToLogin,
    });

  return (
    <Styles.ContainerImageBack source={background} resizeMode="cover">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
        style={{ flex: 1 }}
      />
      <ScrollView>
        <Styles.ContainerForm>
          <Styles.ContainerImage>
            <Styles.Image source={Logo} />
          </Styles.ContainerImage>
          <Styles.TextText> Nome completo</Styles.TextText>
          <Styles.TextInfo
            placeholder="Nome"
            value={values.name}
            onChangeText={handleChange('name')}
            placeholderTextColor={Colors.gray_screen}
            error={errors.name}
          />

          <Styles.TextText> Número de telefone</Styles.TextText>
          <Styles.TextInfo
            placeholder="(XX) 00000-0000"
            value={values.phone}
            onChangeText={(value: any) => {
              setFieldValue('phone', value ? mask.phone(value) : value);
            }}
            placeholderTextColor={Colors.gray_screen}
            keyboardType="numeric"
            maxLength={15}
            error={errors.phone}
          />

          <Styles.TextText> Email</Styles.TextText>
          <Styles.TextInfo
            placeholder="meu_e-mail@gmail.com"
            value={values.email}
            onChangeText={handleChange('email')}
            placeholderTextColor={Colors.gray_screen}
            error={errors.email}
          />
          <Styles.TextText> Senha</Styles.TextText>
          <Styles.TextInfo
            placeholder="Senha"
            value={values.password}
            onChangeText={handleChange('password')}
            placeholderTextColor={Colors.gray_screen}
            secureTextEntry
            maxLength={15}
            error={errors.password}
          />
        </Styles.ContainerForm>
        <Styles.ContainerButton>
          <ButtonGlobal action={handleSubmit} text="Concluir" />
        </Styles.ContainerButton>
      </ScrollView>
    </Styles.ContainerImageBack>
  );
}

export default Register;
