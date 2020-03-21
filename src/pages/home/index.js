import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

export default function home({ navigation }) {
  return (
    <Container>
      <Text onPress={() => navigation.navigate('Cart')}>Home</Text>
    </Container>
  );
}
