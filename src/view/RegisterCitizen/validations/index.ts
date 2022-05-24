import Yup from '../../../utils/yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Nome'),
  cpf: Yup.string().required().label('CPF'),
  birthdate: Yup.string().required().label('Data de nascimento'),
  vaccine: Yup.string().required().label('Tipo de vacina'),
  dose: Yup.string().required().label('Dose da vacina'),
});

export default validationSchema;
