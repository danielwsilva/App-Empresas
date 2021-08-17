import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SimpleLineIcons, Feather } from '@expo/vector-icons';

interface PropsIcon {
  error: boolean;
}

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.text};
  margin-bottom: 2px;
`;

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.shape};
`;

export const Input = styled(TextInput)`
  flex: 1;
  padding: 15px 18px;
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.placeholder};
`;

export const Icon = styled(SimpleLineIcons)<PropsIcon>`
  font-size: ${RFValue(20)}px;
  color: ${({ theme, error }) => 
    error ? theme.colors.attention : theme.colors.placeholder };
  margin-left: 10px;
`;

export const ButtonViewPassword = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const IconViewPassword = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.placeholder};
`;



