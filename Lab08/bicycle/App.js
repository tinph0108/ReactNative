import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ProductBicycle from './ProductBicycle'
import ProductDetail from './ProductDetail'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="ProductBicycle">
    <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
     <Stack.Screen 
          name="ProductBicycle" 
          component={ProductBicycle} 
          options={{ headerShown: false }} 
        /> 
      <Stack.Screen 
          name="ProductDetail" 
          component={ProductDetail} 
          options={{ headerShown: false }} 
        />    
    </Stack.Navigator>
    </NavigationContainer>
  );
}