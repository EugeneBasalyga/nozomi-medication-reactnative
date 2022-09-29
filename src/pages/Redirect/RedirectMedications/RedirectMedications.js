import { Navigate } from 'react-router-native';

import { MEDICATIONS } from '../../../router/consts';

export const RedirectMedications = () => <Navigate to={MEDICATIONS} />;
