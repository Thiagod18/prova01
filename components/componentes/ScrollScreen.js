import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FlatListScreen from './scroll/FlatListScreen';
import FormScreen from './scroll/FormScreen';
import SectionListScreen from './scroll/SectionListScreen';

const Tab = createMaterialTopTabNavigator();

const ScrollScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FlatList" component={FlatListScreen} />
      <Tab.Screen name="SectionList" component={SectionListScreen} />
      <Tab.Screen name="Formulário" component={FormScreen} />
    </Tab.Navigator>
  );
};

export default ScrollScreen;
