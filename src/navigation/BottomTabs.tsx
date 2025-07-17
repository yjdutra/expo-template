import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/Home';
import ConfigScreen from '../screens/Config';
import Header from '../components/Header';
import { useTheme } from 'styled-components/native';

export type RootTabParamList = {
  Home: undefined;
  Config: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabs() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        header: () => <Header />,
        tabBarActiveTintColor: (theme as any)?.colors?.primary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Config"
        component={ConfigScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="settings" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
} 