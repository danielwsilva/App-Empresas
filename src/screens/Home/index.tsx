import React, { useEffect, useState } from 'react';
import { FlatList, Alert } from 'react-native';

import { EnterpriseCard } from '../../components/EnterpriseCard';
import { ListDivider } from '../../components/ListDivider';
import { Search } from '../../components/Search';
import { Load } from '../../components/Load';

import { useAuth } from '../../contexts/auth';

import api from '../../services/api';
import Avatar from '../../assets/avatar.png';

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  LogoutButton,
  Icon,
  Title,
  ListEnterprise
} from './styles';

export interface PropsEnterprise {
  id: number;
  enterprise_name: string;
  photo: string;
  city: string;
  description: string;
  country: string;
  enterprise_type?: {
    enterprise_type_name: string;
  }
}

export function Home(){
  const [enterprises, setEnterprises] = useState<PropsEnterprise[]>([]);
  const [search, setSearch] = useState('');
  const [loadSearch, setLoadSearch] = useState(false);
  const [loading, setLoading] = useState(false);

  const { userInfo, signOut } = useAuth();

  useEffect(() => {
    async function loadEnterprises() {
      try{
        setLoading(true);
        const response = await api.get('enterprises');
        setEnterprises(response.data.enterprises);

      } catch(error) {
        error.response.status === 401
          ? signOut()
          : Alert.alert('Atenção', error.response.data);

      } finally {
        setLoading(false);
      }
    }

    loadEnterprises();
  }, []);

  async function handleSearch() {
    try{
      setLoadSearch(true);
      const response = await api.get(`enterprises?name=${search}`);
      setEnterprises(response.data.enterprises);

    } catch(error) {
      error.response.status === 401
          ? signOut()
          : Alert.alert('Atenção', error.response.data);

    } finally {
      setLoadSearch(false);
    }
  }

  if (loading)
    return <Load />

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={userInfo.photo === null ? Avatar : { uri: userInfo.photo }}
            />
            
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>{userInfo.investor_name}</UserName>
            </User>
          </UserInfo>

          <LogoutButton onPress={signOut}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>

      <Search 
        placeholder='Buscar empresas'
        onChangeText={setSearch}
        handleSearch={handleSearch}
        loadSearch={loadSearch}
      />
      
      <ListEnterprise>
        <Title>Empresas</Title>       
        <FlatList 
          data={enterprises}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider /> }
          contentContainerStyle={{ paddingBottom: 30 }}
          renderItem={({item}) => (
            <EnterpriseCard data={item} />
          )}
        />
      </ListEnterprise>
      
    </Container>
  );
}