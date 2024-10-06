import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; // The renamed file for your main app
import VocabScreen from './VocabScreen'; // Your vocab screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="VocabScreen" component={VocabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
