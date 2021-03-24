import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = (({isOpen, onRequestClose}) => {

  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function resetValuesOnFields(){
    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit');

    onRequestClose();
  }


  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();
    if(!title || !amount || !category || !type ){
      console.log('entrou');
      return;
    }
    await createTransaction({title, amount, category, type});

    resetValuesOnFields();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close"/>
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            isActiveColor="green"
          >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            isActiveColor="red"
          >
            <img src={outcomeImg} alt="Saida"/>
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
            placeholder="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
});
