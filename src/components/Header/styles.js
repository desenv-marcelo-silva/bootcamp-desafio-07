import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  max-height: 60px;
  background: #000;
  padding: 20px;
`;

export const IconCartArea = styled.View`
  flex-direction: row;
`;

export const QuantityCart = styled.Text`
  color: #fff;
  height: 24px;
  width: 24px;
  background: #7159c1;
  padding-left: 8px;
  padding-top: 2px;
  border-radius: 12px;
  top: -15px;
  left: -15px;
`;

export const IconCart = styled(Icon).attrs({
  name: 'shopping-cart',
  size: 24,
})`
  color: #fff;
`;

export const LogoApp = styled.Image.attrs({
  resizeMode: 'cover',
  source: logo,
})`
  width: 190px;
  height: 25px;
`;

export const TitleApp = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
