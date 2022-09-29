import { Navigate } from 'react-router-native';

import { LOGIN } from '../../../router/consts';

export const RedirectLogin = () => <Navigate to={LOGIN} />;
