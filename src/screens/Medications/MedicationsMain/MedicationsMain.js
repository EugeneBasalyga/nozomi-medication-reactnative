import { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { List } from 'react-native-paper';

import Button from '../../../components/Button/Button';
import { useAuth } from '../../../contexts/auth';
import medicationService from '../../../services/api/medications';

const MedicationsMain = () => {
  const [medications, setMedications] = useState([]);
  const { logout } = useAuth();
  const ListIconCompletedComponent = useCallback(() => <List.Icon color="red" icon="close-circle-outline" />, []);
  const ListIconNotCompletedComponent = useCallback(() => <List.Icon color="green" icon="checkbox-marked-circle-outline" />, []);

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
        <List.Section style={styles.medicationsListContainer}>
          {medications.sort((firstItem, secItem) => secItem.createdAt - firstItem.createdAt)
            .filter((item) => item.count !== item.destinationCount).map((item) => (
              <List.Item
                style={styles.medicationsListItem}
                key={item.id}
                title={item.name}
                titleStyle={styles.medicationsListItemTitle}
                description={item.description}
                descriptionStyle={styles.medicationsListItemDescription}
                descriptionNumberOfLines={3}
                left={ListIconCompletedComponent}
              />
            ))}
          {medications.sort((firstItem, secItem) => secItem.createdAt - firstItem.createdAt)
            .filter((item) => item.count === item.destinationCount).map((item) => (
              <List.Item
                style={styles.medicationsListItem}
                key={item.id}
                title={item.name}
                titleStyle={styles.medicationsListItemTitle}
                description={item.description}
                descriptionStyle={styles.medicationsListItemDescription}
                descriptionNumberOfLines={3}
                left={ListIconNotCompletedComponent}
              />
            ))}
        </List.Section>
        <View style={styles.signOutButtonView}>
          <Button title="Sign out" onPress={onPressSignOut} buttonStyle={styles.signOutButton} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f9f9ff',
  },
  medicationsListContainer: {
    flex: 1,
  },
  medicationsListItem: {
    backgroundColor: '#e6f0ff',
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 15,
  },
  medicationsListItemTitle: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 20,
    paddingBottom: 5,
  },
  medicationsListItemDescription: {
    fontFamily: 'Nunito_300Light_Italic',
    fontSize: 14,
  },
  signOutButtonView: {
    paddingBottom: 50,
  },
  signOutButton: {
    alignSelf: 'center',
    backgroundColor: '#991515',
    pressedInBackgroundColor: '#bb2f2f',
    pressedOutBackgroundColor: '#991515',
  },
});

export default MedicationsMain;
