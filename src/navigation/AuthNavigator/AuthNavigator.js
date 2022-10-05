import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AUTH_ROUTES } from '../../routes/auth';
import { AUTH_ROUTE as AUTH_ROUTE_NAMES } from '../../routes/routes';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator
    initialRouteName={AUTH_ROUTE_NAMES.LOGIN}
  >
    {AUTH_ROUTES.map((route) => (
      <AuthStack.Screen
        key={route.name}
        name={route.name}
        component={route.component}
        options={{
          ...route.options,
        }}
      />
    ))}
  </AuthStack.Navigator>
);

AuthNavigator.displayName = AUTH_ROUTE_NAMES.NAVIGATOR_NAME;
export default AuthNavigator;
