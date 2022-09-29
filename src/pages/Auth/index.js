import loadable from '@loadable/component';
import { Text } from 'react-native';

const Auth = {
  Login: loadable(() => import('./Login'), {
    fallback: <Text>Loading...</Text>,
  }),
  Register: loadable(() => import('./Register'), {
    fallback: <Text>Loading...</Text>,
  }),
};

export default Auth;
