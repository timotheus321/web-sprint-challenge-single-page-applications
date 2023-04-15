// validationSchema.js
import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'name must be at least 2 characters') // Add custom error message here
    .required('name is a required field'),
  size: yup.string().required('size is a required field'),
  special: yup.string(),
});
