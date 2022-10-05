import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAuth } from '../contexts/auth';
import Loading from '../screens/Loading';

import AuthNavigator from './AuthNavigator/AuthNavigator';
import MedicationsNavigator from './MedicationsNavigator/MedicationsNavigator';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  const { user, isLoading } = useAuth();

  const getRoute = () => {
    if (isLoading) {
      return { name: 'Loading', component: Loading };
    }

    if (user) {
      return { name: MedicationsNavigator.displayName, component: MedicationsNavigator };
    }

    return {
      name: AuthNavigator.displayName,
      component: AuthNavigator,
    };
  };

  const route = getRoute();

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen
        name={route.name}
        component={route.component}
        options={{
          animation: 'fade',
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
