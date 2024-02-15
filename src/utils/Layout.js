import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Home from '../screens/Home';
import Hospital from '../screens/Hospital';
import Hospital_Emergency_Call from '../screens/Hospital_Emergency_Call';

const Stack = createNativeStackNavigator();

function Layout() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={props => <Home {...props} />} />
        <Stack.Screen name="Hospital" component={Hospital} />
        <Stack.Screen
          name="Hospital Emergency Call"
          component={Hospital_Emergency_Call}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Layout;
