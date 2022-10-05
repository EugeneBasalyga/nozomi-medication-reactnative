import MedicationsMain from '../screens/Medications/MedicationsMain';
import { MEDICATIONS_ROUTE } from './routes';

export const MEDICATIONS_ROUTES = [
  {
    name: MEDICATIONS_ROUTE.MAIN,
    component: MedicationsMain,
    options: {
      title: 'Medications',
      headerStyle: { backgroundColor: '#f9f9ff' },
      headerTitleStyle: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 20,
      },
    },
  },
];
