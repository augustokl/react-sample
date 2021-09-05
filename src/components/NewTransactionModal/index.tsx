import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { api } from '../../services/api';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = {
      title,
      value,
      category,
      type
    }

    api.post('/transactions', data)
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay" 
      className="modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose}
        className="modal-close"
      >
        <img src={closeImg} alt="Close Modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Create transaction</h2>
        
        <input
          placeholder="Title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        
        <input
          type="number"
          placeholder="Value"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Income type" />
            <span>
              Income
            </span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType('withdrwaw')}
            isActive={type === 'withdrwaw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Outcome type" />
            <span>
              Outcome
            </span>
          </RadioBox>
        </TransactionTypeContainer>
        
        <input
          placeholder="Category"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Register
        </button>

      </Container>
    </Modal>
  )
}