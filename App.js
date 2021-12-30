import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/page/Home';
import Mapp from './src/page/Mapp';

const Stack = createNativeStackNavigator();

function App() {
return(
  <NavigationContainer>
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{headrerShown: false}}>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Mapp' component={Mapp}/>
    </Stack.Navigator>
  </NavigationContainer>);
}

export default App;