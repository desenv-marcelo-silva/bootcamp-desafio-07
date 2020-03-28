import React from 'react';
import { connect } from 'react-redux';

import {
  Container,
  IconCartArea,
  IconCart,
  QuantityCart,
  LogoApp,
} from './styles';

function HeaderApp({ totalItemCart }) {
  return (
    <Container>
      <LogoApp />
      <IconCartArea>
        <IconCart />
        <QuantityCart>{totalItemCart}</QuantityCart>
      </IconCartArea>
    </Container>
  );
}

export default connect(state => ({
  totalItemCart: state.cart.length,
}))(HeaderApp);
