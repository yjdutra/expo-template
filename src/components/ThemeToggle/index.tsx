import React from 'react';
import { Switch } from 'react-native';
import { useThemeContext } from '../../contexts/ThemeContext';

export default function ThemeToggle() {
  const { themeName, toggleTheme } = useThemeContext();

  return <Switch value={themeName === 'dark'} onValueChange={toggleTheme} />;
} 