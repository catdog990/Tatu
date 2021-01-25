import * as React from 'react';
import { Settings, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import screens //
import  home  from './screens/HomeScreen.js';
import  settings  from './screens/SettingsScreen.js';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={home} />
        <Tab.Screen name="Settings" component={settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}