import * as yup from 'yup';

yup.addMethod(yup.string, 'integer', function match(message) {
  return this.matches(/^\d+$/, message || 'The field should have digits only');
});

export const passwordRules = {
  minLength: {
    validate: (password) => password?.length > 7,
  },
  uppercase: {
    validate: (password) => /[A-Z]/.test(password),
  },
  lowercase: {
    validate: (password) => /[a-z]/.test(password),
  },
  number: {
    validate: (password) => /[0-9]/.test(password),
  },
};

export const registrationSchema = ({
  emailRequiredError,
  emailFormatError,
  passwordRequiredError,
  passwordLengthError,
  passwordFormatError,
  repeatPasswordRequiredError,
  repeatPasswordMatchError,
}) => yup.object({
  email: yup.string().trim().required(emailRequiredError).email(emailFormatError),
  password: yup
    .string()
    .required(passwordRequiredError)
    .min(8, passwordLengthError)
    .test('password', passwordFormatError, (password) => {
      return Object.values(passwordRules).every((rule) => rule.validate(password));
    }),
  repeatPassword: yup
    .string()
    .required(repeatPasswordRequiredError)
    .oneOf([yup.ref('password')], repeatPasswordMatchError),
});

export const loginSchema = ({
  emailRequiredError,
  emailFormatError,
  passwordRequiredError,
  passwordLengthError,
  passwordFormatError,
}) => yup.object({
  email: yup.string().trim().required(emailRequiredError).email(emailFormatError),
  password: yup
    .string()
    .required(passwordRequiredError)
    .min(8, passwordLengthError)
    .test('password', passwordFormatError, (password) => {
      return Object.values(passwordRules).every((rule) => rule.validate(password));
    }),
});
