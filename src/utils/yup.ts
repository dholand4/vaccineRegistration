import * as Yup from 'yup';

import constantsYup from '../constants/yup';

interface LabelProps {
  label?: string;
}

interface MinProps {
  min: number;
}

const translation = {
  string: {
    min: ({ min }: MinProps) =>
      `Este campo deve ter pelo menos ${min} caracteres `,
  },
  mixed: {
    required: ({ label }: LabelProps) =>
      label
        ? `${label} ${constantsYup.yup_mixed_required_label_field}`
        : constantsYup.yup_mixed_required_field,
  },
};

Yup.setLocale(translation);

export default Yup;
