import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DirectoryScreen from './DirectoryScreen';
import TabScreen from './TabScreen';
import GuessScreen from './GuessScreen';
import PiedraScreen from './Piedra';
import Blackjack from './Blackjack';
import LoadingScreen from './LoadingScreen';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
      <Stack.Screen
          name="myHomeTab"
          component={TabScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Directory" component={DirectoryScreen} options={{title: "Directorio de Juegos"}} />
        <Stack.Screen name="Guess" component={GuessScreen} options={{title: "Guess my Number"}} />
        <Stack.Screen name="Loading" component={LoadingScreen} options={{title: "Loading"}} />
        <Stack.Screen name="Piedra" component={PiedraScreen} options={{title: "Piedra Papel o Tijeras"}}/>
        <Stack.Screen name="Blackjack" component={Blackjack} options={{title: "Blackjack"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}