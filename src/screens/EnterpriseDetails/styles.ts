import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
`;

export const Photo = styled.ImageBackground.attrs({
  resizeMode: 'stretch'
})`
  width: 100%;
  height: ${RFValue(250)}px;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonIcon = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  justify-content: center;
  border-radius: 30px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Icon = styled(Feather)`
  color: ${({ theme}) => theme.colors.primary };
  font-size: ${RFValue(35)}px;
  text-align: center;
`;

export const Divider = styled.View`
  width: 100%;
  height: ${RFValue(30)}px;
  background-color: ${({ theme }) => theme.colors.background};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  flex: 1;
  padding: 0 24px;
`;

export const Type = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  margin: 15px 0;
`;

export const Separator = styled.View`
  width: 39px;
  height: 2px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 5px;
`;

export const EnterpriseName = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;
`;

export const CityCountry = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  text-align: justify;
`;
