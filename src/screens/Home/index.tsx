import React from 'react';
import { Container, Title, CodeImage } from './styles';
import icon from '../../../assets/icon.png';

export default function HomeScreen() {
  return (
    <Container>
      <Title>Página Inicial</Title>
      <CodeImage source={icon} />
    </Container>
  );
} 