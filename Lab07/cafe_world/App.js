import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ShopsScreen from './ShopsScreen'
import DrinksScreen from './DrinksScreen'
import OrderScreen from './OrderScreen'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ShopsScreen" 
          component={ShopsScreen} 
          options={{ headerShown: false }} 
        />
          <Stack.Screen 
          name="DrinksScreen" 
          component={DrinksScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="OrderScreen" 
          component={OrderScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
