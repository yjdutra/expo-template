import React from 'react';
import { Container, Title, Right } from './styles';
import ThemeToggle from '../ThemeToggle';

export default function Header() {
  return (
    <Container>
      <Title>Header</Title>
      <Right>
        <ThemeToggle />
      </Right>
    </Container>
  );
} 