import { Outlet } from 'react-router-native';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import PfizerLogoSvg from '../../assets/PfizerLogoSvg';

const AuthLayout = () => {
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.layoutContainer}>
          <View style={styles.logoContainer}>
            <PfizerLogoSvg />
          </View>
          <View style={styles.authContainer}>
            <Outlet />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 2,
    backgroundColor: '#f9f9ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  authContainer: {
    flex: 4,
    fontFamily: 'Nunito_400Regular',
    backgroundColor: '#f9f9ff',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
});

export default AuthLayout;
