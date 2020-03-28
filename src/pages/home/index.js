import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

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

class Home extends Component {
  state = { products: [] };

  async componentDidMount() {
    const response = await api.get('products');
    this.setState({ products: response.data });
  }

  handleAddCart = product => {
    const { addToCart, navigation } = this.props;
    console.tron.log(this.props);
    addToCart(product);

    navigation.navigate('Cart');
  };

  render() {
    const { products } = this.state;

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
                  <ButtonAddCart onPress={() => this.handleAddCart(product)}>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
