import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts, Nunito_300Light_Italic, Nunito_400Regular, Nunito_700Bold,
} from '@expo-google-fonts/nunito';

import { AuthProvider } from './src/contexts/auth';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  const [fontsLoaded] = useFonts({
    Nunito_300Light_Italic,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
