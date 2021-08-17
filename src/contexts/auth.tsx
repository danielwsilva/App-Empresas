import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage  from '@react-native-async-storage/async-storage';

import api from '../services/api';

interface AuthContextData {
  signed: boolean;
  error: boolean;
  userInfo: PropsUser;
  signIn(credentials: object): Promise<void>;
  signOut(): Promise<void>;
}

interface PropsProvider {
  children: ReactNode;
}

interface PropsUser {
  investor_name: string;
  photo: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({children}: PropsProvider) {
  const [token, setToken] = useState('');
  const [error, setError] = useState(false);
  const [userInfo, setUserInfo] = useState<PropsUser>({} as PropsUser);

  useEffect(() => {
    async function loadStorageData() {
      const storageToken = await AsyncStorage.getItem('@Auth:access-token');
      const storageClient = await AsyncStorage.getItem('@Auth:client');
      const storageUid = await AsyncStorage.getItem('@Auth:uid');
      const storageUser = await AsyncStorage.getItem('@Auth:user');

      if (storageToken) {
        api.defaults.headers['access-token'] = storageToken;
        api.defaults.headers['client'] = storageClient;
        api.defaults.headers['uid'] = storageUid;
        setToken(storageToken);

        if(storageUser)
          setUserInfo(JSON.parse(storageUser));
      }
    }

    loadStorageData();
  }, []);

  async function signIn(credentials: object) {
    try {      
      const response = await api.post('users/auth/sign_in', credentials);

      setUserInfo(response.data.investor);
      setToken(response.headers['access-token']);

      api.defaults.headers['access-token'] = response.headers['access-token'];
      api.defaults.headers['client'] = response.headers['client'];
      api.defaults.headers['uid'] = response.headers['uid'];

      await AsyncStorage.setItem('@Auth:access-token', response.headers['access-token']);
      await AsyncStorage.setItem('@Auth:client', response.headers['client']);
      await AsyncStorage.setItem('@Auth:uid', response.headers['uid']);
      await AsyncStorage.setItem('@Auth:user', JSON.stringify(response.data.investor));

      setError(false);
    } catch { 
      setError(true);
    }
  }

  async function signOut() {
    await AsyncStorage.clear();

    api.defaults.headers['access-token'] = '';
    api.defaults.headers['client'] = '';
    api.defaults.headers['uid'] = '';
    setToken('');
  }

  return (
    <AuthContext.Provider value={{signed: !!token, error, userInfo, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
};