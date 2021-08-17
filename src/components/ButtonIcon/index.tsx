import React from "react";
import { RectButtonProps } from 'react-native-gesture-handler';

import { 
  Container, 
  Button, 
  Wrapper, 
  Icon, 
  Title
} from './styles';

interface Props extends RectButtonProps {
  title: string;
}

export function ButtonIcon({ title, ...rest } : Props) {
   return (
    <Container>
      <Button {...rest}>
        <Wrapper>
          <Icon name="log-in" />
        </Wrapper>

        <Title>{title}</Title>   
      </Button>
    </Container>
  );
}