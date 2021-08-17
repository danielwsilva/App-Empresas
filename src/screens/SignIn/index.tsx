import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

import { InputIcon } from '../../components/InputIcon';
import { ButtonIcon } from '../../components/ButtonIcon';

import { useAuth } from '../../contexts/auth';

import LogoImg from '../../assets/ioasys.png';

import { 
  Container, 
  Gradient,
  Logo, 
  Form, 
  Fields,
  Failure,
  Mensage
} from './styles';

export function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, error } = useAuth();

  function handleSignIn() {
    const credentials = {
      email: email,
      password: password
    }

    signIn(credentials);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Gradient>
          <Logo source={LogoImg} resizeMode="stretch"/>
        </Gradient>

        <Form>
          <Fields>
            <InputIcon 
              title="Usuário"
              icon="user"
              keyboardType="email-address"
              onChangeText={setEmail}
              value={email}
            />

            <InputIcon
              title="Senha" 
              icon="lock"
              isPassword={true}
              onChangeText={setPassword}
              value={password}
              returnKeyType="send"
              onSubmitEditing={handleSignIn}
            />
          </Fields>

          { error && 
            <Failure>
              <Mensage>Usuário ou Senha invalida!</Mensage>
            </Failure> 
          }

          <ButtonIcon title="Entrar" onPress={handleSignIn} />
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
}