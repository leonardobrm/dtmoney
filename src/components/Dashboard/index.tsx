import React from 'react';
import { TransactionsTable } from '../TransactionTable';
import { Summary } from './components/Summary';


import { Container } from './styles';

export const Dashboard: React.FC = () => {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}
