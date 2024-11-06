import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import { Provider } from 'react-redux';
import store from './redux/store';
import AdminScreen from './screens/AdminScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen1">
          <Stack.Screen
            name="Screen1"
            component={Screen1}
            options={{
              headerShown: false,
              cardStyle: {
                flex: 1,
              },
            }}
          />
          <Stack.Screen
            name="Screen2"
            component={Screen2}
            options={{
              headerShown: false,
              cardStyle: {
                flex: 1,
              },
            }}
          />
          <Stack.Screen
            name="Screen3"
            component={Screen3}
            options={{
              headerShown: false,
              cardStyle: {
                flex: 1,
              },
            }}
          />
          <Stack.Screen
            name="Admin"
            component={AdminScreen}
            options={{
              headerShown: false,
              cardStyle: {
                flex: 1,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
