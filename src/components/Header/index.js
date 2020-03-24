import React from 'react';

import {
  Container,
  IconCartArea,
  IconCart,
  QuantityCart,
  LogoApp,
} from './styles';

export default function HeaderApp() {
  return (
    <Container>
      <LogoApp />
      <IconCartArea>
        <IconCart />
        <QuantityCart>3</QuantityCart>
      </IconCartArea>
    </Container>
  );
}
