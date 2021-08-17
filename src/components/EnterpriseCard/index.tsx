import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Modal } from '../../components/Modal';
import { useAuth } from '../../contexts/auth';
import { EnterpriseDetails } from '../../screens/EnterpriseDetails';

import { PropsEnterprise } from '../../screens/Home';
import api from '../../services/api';

import { 
  Container,
  Photo,
  Content,
  EnterpriseName,
  CityCountry,
  Wrapper,
  Icon,
  Description
} from './styles';

interface Props {
  data: PropsEnterprise;
};

export function EnterpriseCard({ data }: Props){
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [enterprise, setEnterprise] = useState<PropsEnterprise>({} as PropsEnterprise);
  
  const { signOut } = useAuth();

  async function handleOpenGuilds() {
    try{
      const response = await api.get(`enterprises/${data.id}`);
      setEnterprise(response.data.enterprise);
      setOpenGuildsModal(true);

    } catch(error) {
      error.response.status === 401
        ? signOut()
        : Alert.alert('Atenção', error.response.data);
    }
  }

  function handleCloseGuilds() {
    setOpenGuildsModal(false);
  }

  return (
    <Container onPress={handleOpenGuilds}>
      <Photo source={{ uri: `https://empresas.ioasys.com.br/${data.photo}` }} />
      <Content>
        <EnterpriseName>{data.enterprise_name}</EnterpriseName>
        <CityCountry>{data.city} / {data.country}</CityCountry>
        <Wrapper>
          <Icon name='briefcase'/>
          <Description>{data.enterprise_type?.enterprise_type_name}</Description>
        </Wrapper>
      </Content>

      {
        enterprise &&  
        <Modal visible={openGuildsModal} >
          <EnterpriseDetails data={enterprise} closeModal={handleCloseGuilds} />
        </Modal>
      }
    </Container>
  );
}