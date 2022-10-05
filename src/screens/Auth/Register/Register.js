import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth } from '../../../contexts/auth';
import InputControl from '../../../components/Input/InputControl';
import Button from '../../../components/Button/Button';
import LinkButton from '../../../components/Button/LinkButton';
import PfizerLogoSvg from '../../../assets/PfizerLogoSvg';
import { AUTH_ROUTE } from '../../../routes/routes';
import { registrationSchema } from '../../../utils/validators/auth';

const Register = () => {
  const { register } = useAuth();

  const {
    control,
    handleSubmit,
    clearErrors,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(
      registrationSchema({
        emailRequiredError: 'Email address is required',
        emailFormatError: 'Email address is invalid',
        passwordRequiredError: 'Password is required',
        passwordLengthError: 'Password must be at least 8 characters long',
        passwordFormatError: 'Password should contain at least one number and have a mixture of uppercase and lowercase letters',
        repeatPasswordRequiredError: 'Repeat password is required',
        repeatPasswordMatchError: 'Repeat password does not match with password',
      }),
    ),
    shouldFocusError: false,
    reValidateMode: 'onSubmit',
  });

  const onPressSignUp = async (form) => {
    const data = await register(form.email, form.password, form.repeatPassword);
    if (data.errors) {
      data.errors.forEach((error) => {
        setError(error.param, { message: error.msg });
      });
    }
  };

  const handleInputChange = (fieldName) => () => {
    if (errors[fieldName]) {
      clearErrors(fieldName);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.layoutContainer}>
        <View style={styles.logoContainer}>
          <PfizerLogoSvg />
        </View>
        <View style={styles.authContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.titleWelcome}>Welcome to Pfizer!</Text>
            <Text style={styles.titleMedications}>Keep your medications intakes in one place!</Text>
            <View style={styles.inputContainer}>
              <InputControl
                name="email"
                control={control}
                label="Email"
                error={errors.email?.message}
                leftIcon={<TextInput.Icon icon="email-outline" />}
                onChange={handleInputChange('email')}
              />
              <InputControl
                name="password"
                control={control}
                label="Password"
                error={errors.password?.message}
                type="password"
                leftIcon={<TextInput.Icon icon="lock-outline" />}
                onChange={handleInputChange('password')}
              />
              <InputControl
                name="repeatPassword"
                control={control}
                label="Repeat password"
                error={errors.repeatPassword?.message}
                type="password"
                leftIcon={<TextInput.Icon icon="lock-outline" />}
                onChange={handleInputChange('repeatPassword')}
              />
            </View>
            <Button title="Sign up" onPress={handleSubmit(onPressSignUp)} buttonStyle={styles.signUpButton} />
          </View>
          <View style={styles.signInContainer}>
            <Text style={styles.accountText}>
              Already have an account?&nbsp;
            </Text>
            <LinkButton to={{ screen: AUTH_ROUTE.LOGIN }} textStyle={styles.signInText}>
              Sign in!
            </LinkButton>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 2,
    backgroundColor: '#f9f9ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  authContainer: {
    flex: 5,
    fontFamily: 'Nunito_400Regular',
    backgroundColor: '#f9f9ff',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  contentContainer: {
    flex: 1,
  },
  titleWelcome: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 25,
    alignSelf: 'center',
    paddingBottom: 10,
  },
  titleMedications: {
    fontFamily: 'Nunito_400Regular',
    color: 'grey',
    fontSize: 15,
    alignSelf: 'center',
    paddingBottom: 20,
  },
  inputContainer: {
    alignItems: 'center',
  },
  signUpButton: {
    alignSelf: 'center',
    marginTop: 20,
    pressedInBackgroundColor: '#1250fa',
    pressedOutBackgroundColor: '#093dcc',
  },
  signInContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingBottom: 50,
  },
  signInText: {
    color: '#169e2c',
    fontFamily: 'Nunito_300Light_Italic',
  },
  accountText: {
    fontFamily: 'Nunito_300Light_Italic',
  },
});

export default Register;
