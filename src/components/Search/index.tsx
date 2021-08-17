import React from 'react';
import { TextInputProps } from 'react-native';

import { 
  Container, 
  Input, 
  Button, 
  Icon,
  Load
} from './styles';

interface Props extends TextInputProps {
  handleSearch: () => void;
  loadSearch: boolean;
};

export function Search({handleSearch, loadSearch,...rest}: Props){
  return (
    <Container>
      <Input 
        autoCapitalize='words'
        autoCorrect={false}
        returnKeyType="send"
        onSubmitEditing={handleSearch}
        {...rest}
      />
      <Button onPress={handleSearch} activeOpacity={0.5}>
        {
          loadSearch 
          ? <Load />
          : <Icon name="search" />
        }
      </Button>
    </Container>
  );
}