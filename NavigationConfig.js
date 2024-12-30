import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MyDrawer } from './components/facilityHome';
import { MyDrawer } from './components/facilityHomePublic';

const Stack = createStackNavigator();

const NavigationConfig = () => {
  return (
    <NavigationContainer>
      <MyDrawer /> 
    </NavigationContainer>
  );
};

export default NavigationConfig;