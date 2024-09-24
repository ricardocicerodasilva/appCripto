import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../componentes/Home'; // Certifique-se de que o caminho está correto
import CadastrarCriptos from './cadastrarCripto';
import AlterarCriptos from './alterarCriptos';

const Stack = createStackNavigator();
export default function Rotas(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="cadastrarCripto" component={CadastrarCriptos} />
      <Stack.Screen name="alterarCriptos" component={AlterarCriptos} />
    </Stack.Navigator>
  );
}

