// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RecoilRoot } from 'recoil';
import HomeScreen from './screens/HomeScreen';
import TaskScreen from './screens/TaskScreen';
import AddJob from './screens/AddJob';

const Stack = createStackNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="TaskScreen" component={TaskScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AddJob" component={AddJob} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
