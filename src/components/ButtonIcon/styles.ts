import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '../../global/styles/theme';

export const Container = styled(LinearGradient).attrs({
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
  colors: [theme.colors.primary, theme.colors.primary_light]
})`
  width: ${RFValue(220)}px;
  height: ${RFValue(56)}px;
  border-radius: 7px;
  margin-top: 8px;
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
`;

export const Wrapper = styled.View`
  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-color: ${({theme}) => theme.colors.shape};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(25)}px;
  color: ${({theme}) => theme.colors.shape};
`;

export const Title = styled.Text`
  flex: 1;
  font-size: ${RFValue(23)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.shape};
  text-align: center;
`;