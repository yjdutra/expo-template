import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import BottomTabs from './BottomTabs';
import { useThemeContext } from '../contexts/ThemeContext';

export default function Navigation() {
  const { themeName } = useThemeContext();

  return (
    <NavigationContainer theme={themeName === 'light' ? DefaultTheme : DarkTheme}>
      <BottomTabs />
    </NavigationContainer>
  );
} 