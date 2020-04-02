import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/main';
import User from './pages/user';


function Routes({navigate}) {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#7159c1',
          },
          headerTintColor: '#fff',
          headerTitleAlign:'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

      }}>
        <Stack.Screen name="Main"  component={Main} />

        {/* finalmente decorar a maneira como se passa parametro de um componente para o outro */}
        <Stack.Screen name="User" options={({ route }) => ({ title: route.params.user.name })} component={User}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
