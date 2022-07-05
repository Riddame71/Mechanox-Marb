import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Services from './Screens/Services';
import Provider from './Screens/Provider';
import SignUp from './Screens/SignUp';
import Login from './Screens/LogIn';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="Provider" component={Provider} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
