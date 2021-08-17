import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: 62px;
  height: 66px;
  border-radius: 7px;
`;

export const Content = styled.View`
  flex: 1;
  margin-left: 24px;
`;

export const EnterpriseName = styled.Text`
  font-size: ${({ theme }) => theme.fonts.medium };
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.title };
`;

export const CityCountry = styled.Text`
  font-size: ${({ theme }) => theme.fonts.regular };
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.text };
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(FontAwesome)`
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.attention };
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.fonts.regular };
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.text };
  margin-left: 7px;
`;
