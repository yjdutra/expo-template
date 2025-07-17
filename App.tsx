import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation';
import { ThemeProvider } from './src/contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <StatusBar style="auto" />
      <Navigation />
    </ThemeProvider>
  );
}
