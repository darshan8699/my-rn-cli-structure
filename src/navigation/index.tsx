import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../common/types';

import HomeScreen from '../pages/home/home';
import Practical1Navigator from './practical-1.navigator';
import Practical2Navigator from './practical-2.navigator';
import Practical3Navigator from './practical-3.navigator';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Practical1" component={Practical1Navigator} />
        <RootStack.Screen name="Practical2" component={Practical2Navigator} />
        <RootStack.Screen name="Practical3" component={Practical3Navigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
