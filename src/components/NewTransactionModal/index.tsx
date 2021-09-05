import { useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit')

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
      <Container>
        <h2>Create transaction</h2>
        
        <input
          placeholder="Title"
        />
        
        <input
          type="number"
          placeholder="Value"
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
        />

        <button type="submit">
          Register
        </button>

      </Container>
    </Modal>
  )
}