import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';
interface TransactionProps {
  id: number;
  title: string;
  category: string;
  amount: number;
  createdAt: Date;
  type: string;
}
interface TableProps {
  transactions: TransactionProps[];
}

function Table( { transactions }: TableProps) {
  console.log(transactions);

  return (
    <table>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => {
          return (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-br').format(new Date(transaction.createdAt))}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export const TransactionsTable = () => {

  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  return (
    <Container>
      <Table transactions={transactions}/>
    </Container>
  )
}
