import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import React, { useState, useContext } from 'react';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { ThemeContext } from 'styled-components/native';

import background from '../../assets/images/background.png';
import Logo from '../../assets/images/img.png';
import ButtonGlobal from '../../components/ButtonGlobal';
import { REGISTER_SREEN } from '../../constants/routes';
import { useUserContext } from '../../providers/user';
import validationSchema from './validations';

import * as Styles from './styles';

function Login() {
  const { Colors } = useContext(ThemeContext);
  const navigation = useNavigation<any>();
  const { loginUser } = useUserContext();
  const [hidePass, setHidePass] = useState(true);

  function goToRegister() {
    navigation.navigate(REGISTER_SREEN);
  }

  function alerta() {
    Alert.alert('', 'Insira o e-mail cadastrado');
  }
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: loginUser,
  });

  return (
    <Styles.ContainerImageBack source={background}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
        style={{ flex: 1 }}
      >
        <Styles.ContainerForm>
          <Styles.ContainerImage>
            <Styles.Image source={Logo} />
          </Styles.ContainerImage>
          <Styles.TextInfo> E-mail</Styles.TextInfo>
          <Styles.InputText
            action={alerta}
            iconName="exclamationcircleo"
            libIcon="AD"
            placeholder="meu_e-mail@gmail.com"
            value={values.email}
            onChangeText={handleChange('email')}
            placeholderTextColor={Colors.gray_screen}
            error={errors.email}
          />
          <Styles.TextInfo> Senha</Styles.TextInfo>
          <Styles.InputText
            action={() => setHidePass(!hidePass)}
            iconName={hidePass ? 'eye-slash' : 'eye'}
            libIcon="FW"
            placeholder="**************"
            value={values.password}
            onChangeText={handleChange('password')}
            placeholderTextColor={Colors.gray_screen}
            secureTextEntry={hidePass}
            error={errors.password}
          />
        </Styles.ContainerForm>

        <Styles.ContainerButton>
          <ButtonGlobal action={() => handleSubmit()} text="Entrar" />
        </Styles.ContainerButton>

        <Styles.ContainerButton>
          <ButtonGlobal
            color={Colors.white}
            colorText={Colors.background_color}
            action={goToRegister}
            text="Cadastrar"
          />
        </Styles.ContainerButton>
      </KeyboardAvoidingView>
    </Styles.ContainerImageBack>
  );
}

export default Login;
