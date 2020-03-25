import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #000;
`;

export const Cart = styled.View`
  flex: 1;
  background: #fff;
  border-radius: 6px;
`;

export const ItemArea = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 4;
  margin-top: 20px;
`;

export const Item = styled.View`
  padding: 10px;
`;

export const ProductInfo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;

export const ProductImage = styled.Image`
  height: 100px;
  width: 100px;
  align-self: center;
  background: #fff;
  margin-right: 8px;
`;

export const ProductArea = styled.View`
  flex: 1;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 15px;
  color: #999;
`;

export const ProductValue = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export const TotalItemArea = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: rgb(235, 255, 250);
  max-height: 40px;
  padding: 20px;
`;

export const TotalItemQty = styled.Text`
  padding: 5px 15px;
  font-size: 12px;
  text-align: center;
  border: 1px solid #ccc;
  background: #fff;
`;

export const TotalItem = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export const TotalCartArea = styled.View`
  flex: 1;
  align-items: center;
  text-align: center;
`;

export const TotalCartText = styled.Text`
  font-size: 20px;
  text-transform: uppercase;
  color: #d3d3d3;
`;

export const TotalCartValue = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

export const ButtonArea = styled.View`
  flex: 0.5;
  margin: 20px;
`;

export const CloseOrderButton = styled(RectButton)`
  border-radius: 4px;
  background: #7159c1;
`;

export const CloseOrderButtonText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  padding: 5px;
  margin: 5px;
  text-align: center;
`;
