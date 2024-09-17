import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './rotas/rotas'; // Corrigi para Rotas, já que esse é o nome do seu componente de rotas

export default function App() {
  return (
    <NavigationContainer>
      <Rotas />
    </NavigationContainer>
  );
}