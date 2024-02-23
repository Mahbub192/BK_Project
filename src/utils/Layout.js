import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Home from '../screens/Home';
import Hospital from '../screens/Hospital';
import Hospital_Emergency_Call from '../screens/Hospital_Emergency_Call';
import Hospital_Doctor_list from '../screens/Hospital_Doctor_list';
import Police from '../screens/Police';
import Police_Emergency_Call from '../screens/Police_Emergency_Call';
import Police_list from '../screens/Police_list';
import FireService from '../screens/Fireservice';
import Fireservice_Emergency_Call from '../screens/Fireservice_Emergency_Call';
import FireService_list from '../screens/FireService_list';
import Ambulance_list from '../screens/Ambulance _list';
import Upazila_Officer from '../screens/Upazila_Officer';
import Upazila_Nirbachon_Office from '../screens/Upazila_Nirbachon_Office';

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
        <Stack.Screen
          name="Hospital Doctor List"
          component={Hospital_Doctor_list}
        />
        <Stack.Screen name="Police" component={Police} />
        <Stack.Screen
          name="Police Emergency Call"
          component={Police_Emergency_Call}
        />
        <Stack.Screen name="Police List" component={Police_list} />

        <Stack.Screen name="FireService" component={FireService} />
        <Stack.Screen
          name="FireService Emergency Call"
          component={Fireservice_Emergency_Call}
        />
        <Stack.Screen name="FireService list" component={FireService_list} />

        <Stack.Screen name="Ambulance list" component={Ambulance_list} />

        <Stack.Screen name="Upazila Officer" component={Upazila_Officer} />
        <Stack.Screen
          name="Upozila Nirbachon Office"
          component={Upazila_Nirbachon_Office}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Layout;
