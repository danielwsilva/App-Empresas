import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { useAuth } from '../../contexts/auth';

import { 
  Title, 
  Wrapper, 
  Icon, 
  Input, 
  ButtonViewPassword, 
  IconViewPassword 
} from './styles';

interface PropsInput extends TextInputProps {
  title: string;
  icon: 'user' | 'lock';
  isPassword?: boolean;
}

export function InputIcon({ title, icon, isPassword = false, ...rest }: PropsInput){
  const { error } = useAuth();
  const [viewPassword, setViewPassword] = useState(true);

  function handleViewPassword() {
    setViewPassword(!viewPassword);
  }

  return (
    <>
      <Title>{title}</Title>
      <Wrapper>
        <Icon name={icon} error={error} />
        <Input
          autoCorrect={false}
          secureTextEntry={isPassword && viewPassword ? true : false}
          {...rest}
        />
        {
          isPassword &&
          <ButtonViewPassword onPress={handleViewPassword}>
            <IconViewPassword name={viewPassword ? 'eye-off' : 'eye'} />
          </ButtonViewPassword>
        }
      </Wrapper>
    </>
  );
}