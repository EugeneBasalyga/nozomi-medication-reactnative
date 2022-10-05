import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import { AUTH_ROUTE } from './routes';

export const AUTH_ROUTES = [
  {
    name: AUTH_ROUTE.LOGIN,
    component: Login,
    options: {
      title: 'Sign In',
      animation: 'simple_push',
      headerStyle: { backgroundColor: '#f9f9ff' },
      headerTitleStyle: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 20,
      },
    },
  },
  {
    name: AUTH_ROUTE.REGISTER,
    component: Register,
    options: {
      title: 'Sign Up',
      animation: 'simple_push',
      headerStyle: { backgroundColor: '#f9f9ff' },
      headerTitleStyle: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 20,
      },
      headerBackTitleVisible: false,
    },
  },
];
