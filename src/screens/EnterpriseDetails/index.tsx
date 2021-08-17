import React from 'react';

import { PropsEnterprise } from '../Home';

import { 
  Container,
  Photo,
  ButtonIcon,
  Icon,
  Divider,
  Content,
  Type,
  Separator,
  EnterpriseName,
  CityCountry,
  Description
} from './styles';

interface Props {
  data: PropsEnterprise;
  closeModal: () => void;
}

export function EnterpriseDetails({ data, closeModal }: Props){
  return (
    <Container>
      <Photo source={{ uri: `https://empresas.ioasys.com.br/${data.photo}` }}>
        <ButtonIcon onPress={closeModal}>
          <Icon name='chevron-down' />
        </ButtonIcon>
        <Divider /> 
      </Photo>

      <Content>
        <EnterpriseName>{data.enterprise_name}</EnterpriseName>
        <CityCountry>{data.city} / {data.country}</CityCountry>
        <Type>Empreendimento: {data.enterprise_type?.enterprise_type_name}</Type>
        <Separator />
        <Description>{data.description}</Description>
      </Content>
    </Container>
  );
}