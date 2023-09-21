import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from './src/pages/Feed';
import Conexao from './src/pages/Conexões';
import MeuBar from './src/pages/Meu Bar';

const Stack = createNativeStackNavigator()



export default function App() {
 return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed}/>      
      <Stack.Screen name="Conexao" component={Conexao}/>  
      <Stack.Screen name="MeuBar" component={MeuBar}/>   
    </Stack.Navigator>
  </NavigationContainer>
 
  );
}
