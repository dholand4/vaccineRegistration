import Yup from '../../../utils/yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label('E-mail'),
  password: Yup.string().required().min(6).label('Senha'),
});

export default validationSchema;
