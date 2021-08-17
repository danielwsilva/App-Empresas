import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Heebo_400Regular, Heebo_500Medium } from '@expo-google-fonts/heebo';

import {AuthProvider} from './src/contexts/auth';
import { Routes } from './src/routes';

import theme from './src/global/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Heebo_400Regular,
    Heebo_500Medium
  });

  if(!fontsLoaded)
    return <AppLoading />

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content" 
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}