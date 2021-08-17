import React, { ReactNode } from 'react';
import { ModalProps } from 'react-native';

interface Props extends ModalProps {
  children: ReactNode;
};

import {
  ModalView,
  Overlay,
  Container
 } from './styles';

export function Modal({children, ...rest}: Props){
  return (
    <ModalView 
      transparent
      statusBarTranslucent
      animationType="slide"
      {...rest}
    >
      <Overlay>
        <Container>
          {children}
        </Container>
      </Overlay>
    </ModalView>
  );
}