import { NativeRouter } from 'react-router-native';
import {
  useFonts, Nunito_300Light_Italic, Nunito_400Regular, Nunito_700Bold,
} from '@expo-google-fonts/nunito';

import { AuthProvider } from './src/contexts/auth';
import AppRouter from './src/router/AppRouter';

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
    <AuthProvider>
      <NativeRouter>
        <AppRouter />
      </NativeRouter>
    </AuthProvider>
  );
};

export default App;
