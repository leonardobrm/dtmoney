import React from 'react';
import { Container } from './styles';

import incomeImg from '../../../../assets/income.svg';
import outcomeImg from '../../../../assets/outcome.svg';
import totalImg from '../../../../assets/total.svg';
import { useTransactions } from '../../../../hooks/useTransactions';
import { formatNumber } from '../../../../utils/formatValues';

interface infosProps {
  title: string;
  icon: string;
}

function Infos({title, icon}: infosProps){

  const {transactions} = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
      if(transaction.type === 'deposit'){
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;

  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  });


let color;
  if(title === 'Total'){
    color = '#33CC95';
  }

  const value = () => {
    switch (title) {
      case 'Entrada':
        return formatNumber(summary.deposits);
      case 'Saida':
        return `-${formatNumber(summary.withdraws)}`
      case 'Total':
        return formatNumber(summary.total);
    }
  }

  return (
    <div style={{backgroundColor: `${color}`}}>
        <header>
          <p>{title}</p>
          <img src={icon} alt={title}/>
        </header>
        <strong>{value()}</strong>
      </div>
  )
}

export const Summary: React.FC = () => {
  return (
    <Container>
      <Infos title="Entrada" icon={incomeImg}/>
      <Infos title="Saida" icon={outcomeImg} />
      <Infos title="Total" icon={totalImg}/>
    </Container>
  )
}
