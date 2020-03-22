import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  margin-top: 30px;
`;

export const List = styled.View`
  flex: 1;
  background: #000;
  align-items: center;
`;

export const ProductList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Product = styled.View`
  flex: 1;
  background: #fff;
  margin: 10px;
  padding: 10px 20px;
  max-width: 300px;
  border-radius: 5px;
`;

export const Titulo = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
  margin-bottom: auto;
`;

export const Preco = styled.Text`
  font-size: 20px;
  margin-left: 10px;
  font-weight: 700;
`;

export const Imagem = styled.Image`
  width: 250px;
  height: 250px;
  align-self: center;
`;

export const ButtonArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-content: space-between;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  padding: 10px;
  margin-top: auto;
`;

export const ButtonAddCart = styled(RectButton)``;

export const ButtonAddCartText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
