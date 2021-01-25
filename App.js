import * as React from 'react';
import { Settings, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

//import screens //
import  home  from './screens/HomeScreen.js';
import  settings  from './screens/SettingsScreen.js';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
          screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'skull'
                : 'skull-outline';
            } else if (route.name === 'Settings') {
              iconName = focused 
              ? 'planet' 
              : 'planet-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      
      >
        <Tab.Screen name="Home" component={home} />
        <Tab.Screen name="Settings" component={settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}