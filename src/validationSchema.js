import * as Yup from 'yup';

export const orderValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'name must be at least 2 characters')
    .required('name must be at least 2 characters'),
  size: Yup.string().required('Size is required'),
  special: Yup.string().required(),
});
