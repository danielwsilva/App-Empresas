import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '../../global/styles/theme';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 7px;
  margin: 0 24px;
  flex-direction: row;
  margin-top: ${RFValue(-28)}px;
`;

export const Input = styled(TextInput)`
  flex: 1;
  padding: 0 20px;
  border-right-width: 1px;
  border-right-color: #EBEBEB;
  color: ${({ theme }) => theme.colors.text};
`;

export const Button = styled.TouchableOpacity`
  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Load = styled.ActivityIndicator.attrs({
  size: 'small',
  color: theme.colors.text
})`
  flex: 1;
  text-align: center;
`;