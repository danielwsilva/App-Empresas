import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

import theme from '../../global/styles/theme';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.title };
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: [theme.colors.primary_light, theme.colors.primary]
})`
  width: 100%;
  height: ${RFPercentage(76)}px;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: ${RFValue(250)}px;
  height: ${RFValue(64)}px;
  margin-bottom: ${RFValue(73)}px;
`;

export const Form = styled.View`
  background-color: ${({theme }) => theme.colors.background};
  border-radius: 7px;
  padding: 43px 17px;
  margin: 0 19px;
  margin-top: ${RFValue(-213)}px;
  align-items: center;
`;

export const Fields = styled.View``;

export const Failure = styled.View`
  width: 100%;
  padding: 10px;
  border-radius: 7px;
  background-color: ${({theme }) => theme.colors.shape};
  border-left-color: ${({theme }) => theme.colors.attention};
  border-left-width: 5px;
  margin-bottom: 8px;
`;

export const Mensage = styled.Text`
  color: ${({theme }) => theme.colors.title};
  font-family: ${({theme }) => theme.fonts.regular};
  font-size: 15px;
`;