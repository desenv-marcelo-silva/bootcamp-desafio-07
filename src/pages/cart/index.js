import React from 'react';
import { Text, Button } from 'react-native';

import { Container } from './styles';

export default function cart({ navigation }) {
  return (
    <Container>
      <Text>Cart</Text>
      <Button onPress={() => navigation.navigate('Home')} title="Voltar" />
    </Container>
  );
}
