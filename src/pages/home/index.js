import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  List,
  Product,
  ProductList,
  Imagem,
  ButtonArea,
  ButtonAddCart,
  ButtonAddCartText,
  Titulo,
  Preco,
} from './styles';

const DATA = [
  {
    id: 1,
    title: 'Tênis de Caminhada Leve Confortável',
    price: 179.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
  },
  {
    id: 2,
    title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
    price: 139.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
  },
  {
    id: 3,
    title: 'Tênis Adidas Duramo Lite 2.0',
    price: 219.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
  },
];

export default function home({ navigation }) {
  return (
    <Container>
      <List>
        <ProductList>
          {DATA.map(product => (
            <Product key={product.id}>
              <Imagem source={{ uri: product.image }} />
              <Titulo>{product.title}</Titulo>
              <Preco>{product.price}</Preco>
              <ButtonArea>
                <Icon name="add-shopping-cart" size={20} color="#FFF" />
                <Text>3</Text>
                <ButtonAddCart onPress={() => {}}>
                  <ButtonAddCartText>Adicionar ao carrinho</ButtonAddCartText>
                </ButtonAddCart>
              </ButtonArea>
            </Product>
          ))}
        </ProductList>
      </List>
      <Text onPress={() => navigation.navigate('Cart')}>Home</Text>
    </Container>
  );
}
