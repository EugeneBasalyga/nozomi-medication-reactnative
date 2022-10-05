import React from 'react';
import { StyleSheet, View } from 'react-native';

import Activity from '../../components/Loaders/Activity';

const Loading = () => {
  return (
    <View style={styles.root}>
      <Activity style={styles.spinner} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9ff',
  },
  spinner: {
    transform: [{ scale: 1.3 }],
  },
});

export default Loading;
