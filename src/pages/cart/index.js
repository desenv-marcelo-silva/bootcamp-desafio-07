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
  TotalItemQuantityArea,
  TotalItemQuantity,
  TotalItem,
  IconDelete,
  ButtonDelete,
  IconMinus,
  ButtonMinus,
  IconPlus,
  ButtonPlus,
} from './styles';

function Cart({ cart, dispatch }) {
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
                <ButtonDelete
                  onPress={() =>
                    dispatch({
                      type: '@cart/REMOVE_FROM_CART',
                      id: item.id,
                    })
                  }>
                  <IconDelete />
                </ButtonDelete>
              </ProductInfo>
              <TotalItemArea>
                <TotalItemQuantityArea>
                  <ButtonMinus onPress={() => {}}>
                    <IconMinus />
                  </ButtonMinus>
                  <TotalItemQuantity>{item.amount}</TotalItemQuantity>
                  <ButtonPlus onPress={() => {}}>
                    <IconPlus />
                  </ButtonPlus>
                </TotalItemQuantityArea>
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
