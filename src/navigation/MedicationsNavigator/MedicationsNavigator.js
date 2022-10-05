import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MEDICATIONS_ROUTES } from '../../routes/medications';
import { MEDICATIONS_ROUTE as MEDICATIONS_ROUTE_NAMES } from '../../routes/routes';

const MedicationsStack = createNativeStackNavigator();

const MedicationsNavigator = () => (
  <MedicationsStack.Navigator
    initialRouteName={MEDICATIONS_ROUTE_NAMES.MAIN}
  >
    {MEDICATIONS_ROUTES.map((route) => (
      <MedicationsStack.Screen
        key={route.name}
        name={route.name}
        component={route.component}
        options={{
          ...route.options,
        }}
      />
    ))}
  </MedicationsStack.Navigator>
);

MedicationsNavigator.displayName = MEDICATIONS_ROUTE_NAMES.NAVIGATOR_NAME;
export default MedicationsNavigator;
