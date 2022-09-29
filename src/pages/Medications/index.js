import loadable from '@loadable/component';
import { Text } from 'react-native';

const Medications = {
  MedicationsMain: loadable(() => import('./MedicationsMain'), {
    fallback: <Text>Loading...</Text>,
  }),
  MedicationObjectPage: loadable(() => import('./MedicationObjectPage'), {
    fallback: <Text>Loading...</Text>,
  }),
};

export default Medications;
