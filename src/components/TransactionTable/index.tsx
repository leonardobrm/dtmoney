import { useTransactions } from '../../hooks/useTransactions';
import { formatDate, formatNumber } from '../../utils/formatValues';
import { Container } from './styles';

function Table() {

  const { transactions } = useTransactions();


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
                {transaction.type === 'withdraw'
                ? `-${formatNumber(transaction.amount)}`
                : formatNumber(transaction.amount)
              }
              </td>
              <td>{transaction.category}</td>
              <td>
                {formatDate(transaction.createdAt)}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export const TransactionsTable = () => {
  return (
    <Container>
      <Table />
    </Container>
  )
}
