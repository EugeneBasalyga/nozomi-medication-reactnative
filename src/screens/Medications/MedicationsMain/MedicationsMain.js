import { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, FlatList,
} from 'react-native';

import Button from '../../../components/Button/Button';
import { useAuth } from '../../../contexts/auth';
import medicationService from '../../../services/api/medications';

const MedicationsMain = () => {
  const [medications, setMedications] = useState([]);
  const { logout } = useAuth();

  useEffect(() => {
    medicationService.getMedications()
      .then((data) => setMedications(data))
      .catch((err) => console.log(err));
  }, []);

  const onPressSignOut = async () => {
    await logout();
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            data={medications}
            renderItem={({ item }) => <Text style={styles.medicationItem}>{item.name}</Text>}
          />
        </View>
        <Button title="Sign out" onPress={onPressSignOut} buttonStyle={styles.signOutButton} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#f9f9ff',
  },
  listContainer: {
    alignItems: 'center',
  },
  signOutButton: {
    alignSelf: 'center',
    backgroundColor: '#991515',
    pressedInBackgroundColor: '#bb2f2f',
    pressedOutBackgroundColor: '#991515',
  },
  medicationItem: {
    fontFamily: 'Nunito_700Bold',
    padding: 10,
    fontSize: 20,
  },
});

export default MedicationsMain;
