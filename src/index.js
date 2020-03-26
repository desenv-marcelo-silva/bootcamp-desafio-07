import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import './config/ReactotronConfig';

import HeaderApp from './components/Header';
import Routes from './Routes';

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <HeaderApp />
      <Routes />
    </NavigationContainer>
  );
}

export default App;
