import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './redux/store'; 
import HomeScreen from './screens/HomeScreen';
import TaskScreen from './screens/TaskScreen';
import AddJob from './screens/AddJob'
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TaskScreen"
            component={TaskScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddJob"
            component={AddJob}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
