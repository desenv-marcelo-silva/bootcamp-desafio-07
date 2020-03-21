import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/home';
import Cart from './pages/cart';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      headerBackTitleVisible={false}
      headerLayoutPreset="center"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
        headerAlign: 'center',
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'RocketShoes - Home' }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ title: 'RocketShoes - Cart' }}
      />
    </Stack.Navigator>
  );
}
