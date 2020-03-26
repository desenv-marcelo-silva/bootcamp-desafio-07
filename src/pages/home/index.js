import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
  Container,
  List,
  Product,
  ProductList,
  Image,
  AreaButton,
  AreaPhoto,
  AreaPriceTitle,
  ButtonAddCart,
  ButtonAddCartText,
  IconArea,
  Quantity,
  Title,
  Price,
} from './styles';

export default class Home extends Component {
  state = { products: [] };

  async componentDidMount() {
    const response = await api.get('products');
    console.tron.warn(response.data);
    this.setState({ products: response.data });
  }

  render() {
    const { products } = this.state;
    const { navigation } = this.props;

    return (
      <Container>
        <List>
          <ProductList>
            {products.map(product => (
              <Product key={product.id}>
                <AreaPhoto>
                  <Image source={{ uri: product.image }} />
                </AreaPhoto>
                <AreaPriceTitle>
                  <Title>{product.title}</Title>
                  <Price>{product.price}</Price>
                </AreaPriceTitle>
                <AreaButton>
                  <IconArea>
                    <Icon name="add-shopping-cart" size={20} color="#FFF" />
                    <Quantity>3</Quantity>
                  </IconArea>
                  <ButtonAddCart onPress={() => navigation.navigate('Cart')}>
                    <ButtonAddCartText>Adicionar ao carrinho</ButtonAddCartText>
                  </ButtonAddCart>
                </AreaButton>
              </Product>
            ))}
          </ProductList>
        </List>
      </Container>
    );
  }
}
