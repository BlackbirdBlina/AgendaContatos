import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaContatos from './pages/listacontatos';
import DetalheContato from './pages/detalhecontato';
import { Home } from './pages/home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Agenda"
          component={Home}
          options={{ title: 'Contatos' }} // Define o título da página como "Postagens"
        />
        <Stack.Screen
          name="DetalheContato"
          component={DetalheContato}
          options={{ title: 'Detalhes do contato' }} // Define o título da página como "Detalhes da Postagem"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


