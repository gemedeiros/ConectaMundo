import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from './LoadingScreen';
import InitialScreen from './InitialScreen';
import TouristSpotsScreen from './TouristSpotsScreen';
import TourismDetailsScreen from './TourismDetailsScreen';
import DetailsScreen from './DetailsScreen';
import HowToGetScreen from './HowToGetScreen';
import { Image, View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (

<NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen">
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="InitialScreen" component={InitialScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TouristSpotsScreen" component={TouristSpotsScreen} options={{ title: 'Pontos Turísticos' }} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ title: 'Detalhes sobre Castilho - SP' }} />
        <Stack.Screen name="TourismDetailsScreen" component={TourismDetailsScreen} options={{ title: 'Cidades' }} />
        <Stack.Screen name="HowToGetScreen" component={HowToGetScreen} options={{ title: 'Como Chegar' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;