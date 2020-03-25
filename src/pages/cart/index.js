import React from 'react';

import {
  Container,
  Cart,
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

const cartContent = [
  {
    id: 1,
    title: 'Tênis de Caminhada Leve Confortável',
    price: 179.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
  },
  {
    id: 2,
    title: 'Tênis de Caminhada Leve Confortável',
    price: 179.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
  },
  {
    id: 3,
    title: 'Tênis de Caminhada Leve Confortável',
    price: 179.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
  },
  {
    id: 4,
    title: 'Tênis de Caminhada Leve Confortável',
    price: 179.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
  },
];

export default function cart({ navigation }) {
  return (
    <Container>
      <Cart>
        <ItemArea
          data={cartContent}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Item>
              <ProductInfo>
                <ProductImage source={{ uri: item.image }} />
                <ProductArea>
                  <ProductTitle>
                    Tênis de caminhada leve confortável
                  </ProductTitle>
                  <ProductValue>R$ 179,99</ProductValue>
                </ProductArea>
              </ProductInfo>
              <TotalItemArea>
                <TotalItemQty>3</TotalItemQty>
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
          <CloseOrderButton onPress={() => navigation.navigate('Home')}>
            <CloseOrderButtonText>Finalizar pedido</CloseOrderButtonText>
          </CloseOrderButton>
        </ButtonArea>
      </Cart>
    </Container>
  );
}
