import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#7159c1',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#FFF',
    fontSize: 22,
  },
});

function App() {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>App Rocketshoes - Challenge #7</Text>
    </View>
  );
}

export default App;
