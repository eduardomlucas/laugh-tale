import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';
import HomeScreen from './screens/HomeScreen';
import LeituraScreen from './screens/LeituraScreen';
import CriarScreen from './screens/CriarScreen';
import AdicionarScreen from './screens/AdicionarScreen';
import LerMangaScreen from './screens/LerMangaScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Lista de Leitura" component={LeituraScreen} />
        <Stack.Screen name="Ler Manga" component={LerMangaScreen}/>
        <Stack.Screen name="Criar" component={CriarScreen} />
        <Stack.Screen name="Adicionar" component={AdicionarScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

