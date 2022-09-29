import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Link } from 'react-router-native';

import { useAuth } from '../../../contexts/auth';
import Input from '../../../components/Common/Input';
import PasswordInput from '../../../components/Common/PasswordInput';
import Button from '../../../components/Common/Button';
import { REGISTER } from '../../../router/consts';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);
  const { login } = useAuth();

  const onPressSignIn = async () => {
    const data = await login(email, password);
    if (data.errors) {
      const errors = data.errors.map((error) => {
        return {
          field: error.param,
          msg: error.msg,
        };
      });
      setErrorMessages(errors);
    }
  };

  const onChangeEmail = (text) => {
    setEmail(text);
    const errorMessagesCopy = errorMessages.filter((el) => el.field !== 'email');
    setErrorMessages(errorMessagesCopy);
  };

  const onChangePassword = (text) => {
    setPassword(text);
    const errorMessagesCopy = errorMessages.filter((el) => el.field !== 'password');
    setErrorMessages(errorMessagesCopy);
  };

  return (
    <>
      <View style={styles.contentContainer}>
        <Text style={styles.titleWelcome}>Welcome to Pfizer!</Text>
        <Text style={styles.titleMedications}>Keep your medications intakes in one place!</Text>
        <View style={styles.inputContainer}>
          <Input value={email} label="Email" leftIcon={<TextInput.Icon icon="email-outline" />} error={errorMessages.find((error) => error.field === 'email')} onChangeText={onChangeEmail} />
          <PasswordInput value={password} label="Password" leftIcon={<TextInput.Icon icon="lock-outline" />} error={errorMessages.find((error) => error.field === 'password')} onChangeText={onChangePassword} />
        </View>
        <Button title="Sign in" onPress={onPressSignIn} buttonStyle={styles.signInButton} />
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.accountText}>
          Don&apos;t have an account?&nbsp;
        </Text>
        <Link to={REGISTER} activeOpacity={0.5} underlayColor="transparent">
          <Text style={styles.signUpText}>
            Sign up!
          </Text>
        </Link>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
  signInButton: {
    alignSelf: 'center',
    marginTop: 20,
    pressedInBackgroundColor: '#00e79a',
    pressedOutBackgroundColor: '#01d28e',
  },
  signUpContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingBottom: 50,
  },
  signUpText: {
    color: '#1641ff',
    fontFamily: 'Nunito_300Light_Italic',
  },
  accountText: {
    fontFamily: 'Nunito_300Light_Italic',
  },
});

export default Login;
