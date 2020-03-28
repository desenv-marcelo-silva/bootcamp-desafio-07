import React from 'react';
import { connect } from 'react-redux';

import {
  Container,
  CartProduct,
  ButtonArea,
  TotalCartArea,
  TotalCartText,
  TotalCartValue,
  CloseOrderButton,
  CloseOrderButtonText,
  ItemArea,
  Item,
  ProductInfo,
  ProductArea,
  ProductImage,
  ProductTitle,
  ProductValue,
  TotalItemArea,
  TotalItemQty,
  TotalItem,
} from './styles';

function Cart({ cart }) {
  return (
    <Container>
      <CartProduct>
        <ItemArea
          data={cart}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Item>
              <ProductInfo>
                <ProductImage source={{ uri: item.image }} />
                <ProductArea>
                  <ProductTitle>{item.title}</ProductTitle>
                  <ProductValue>{item.price}</ProductValue>
                </ProductArea>
              </ProductInfo>
              <TotalItemArea>
                <TotalItemQty>{item.amount}</TotalItemQty>
                <TotalItem>R$ 539,71</TotalItem>
              </TotalItemArea>
            </Item>
          )}
        />

        <TotalCartArea>
          <TotalCartText>Total</TotalCartText>
          <TotalCartValue>R$ 1619,10</TotalCartValue>
        </TotalCartArea>
        <ButtonArea>
          <CloseOrderButton onPress={() => {}}>
            <CloseOrderButtonText>Finalizar pedido</CloseOrderButtonText>
          </CloseOrderButton>
        </ButtonArea>
      </CartProduct>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
