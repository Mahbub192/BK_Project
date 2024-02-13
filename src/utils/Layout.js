import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Home from '../screens/Home';
import Hospital from '../screens/Hospital';

const Stack = createNativeStackNavigator();

function Layout() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={props => <Home {...props} />} />
        <Stack.Screen name="Hospital" component={Hospital} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Layout;
