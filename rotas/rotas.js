import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './home';
import CadastrarCriptos from './cadastrarCripto';
import AlterarCriptos from './alterarCriptos';

const Stack = createStackNavigator();

function Rotas() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="cadastrarCripto" component={CadastrarCriptos} />
      <Stack.Screen name="alterarCriptos" component={AlterarCriptos} />
    </Stack.Navigator>
  );
}

export default Rotas;
