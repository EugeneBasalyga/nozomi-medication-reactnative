import { StyleSheet, Text, View } from 'react-native';

const MedicationObjectPage = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Medications object page</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MedicationObjectPage;
