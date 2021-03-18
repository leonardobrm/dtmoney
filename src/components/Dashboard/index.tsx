import React from 'react';
import { Summary } from './components/Summary';

import { Container } from './styles';

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <Summary />
    </Container>
  )
}
