import React from 'react';
import { Container } from './styles';

export const TransactionsTable = () => {
  return (
    <Container>
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
          <tr>
            <td>Desenvolvimento</td>
            <td>R$120</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento</td>
            <td>R$120</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr><tr>
            <td>Desenvolvimento</td>
            <td>R$120</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
