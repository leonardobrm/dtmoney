import React from 'react';
import { Container } from './styles';

import incomeImg from '../../../../assets/income.svg';
import outcomeImg from '../../../../assets/outcome.svg';
import totalImg from '../../../../assets/total.svg';

interface infosProps {
  title: string;
  icon: string;
  value: string;
}

function Infos({title, icon, value}: infosProps){
  return (
    <div>
        <header>
          <p>{title}</p>
          <img src={icon} alt={title}/>
        </header>
        <strong>{value}</strong>
      </div>
  )
}

export const Summary: React.FC = () => {
  return (
    <Container>
      <Infos title="Entrada" icon={incomeImg} value="R$1000"/>
      <Infos title="Saida" icon={outcomeImg} value="R$1000"/>
      <Infos title="entrada" icon={totalImg} value="R$1000"/>
    </Container>
  )
}
