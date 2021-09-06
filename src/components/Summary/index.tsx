import { useContext } from 'react';
import { useTransactionsContext } from '../../hooks/useTransactionsContext';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";

export function Sumary() {
  const { transactions } = useTransactionsContext()
  const language = navigator.language

  const totalDeposits = transactions.reduce((acc, transaction) => transaction.type === 'deposit'
    ? acc + transaction.amount
    : acc
  , 0)

  const totalWithdraws = transactions.reduce((acc, transaction) => transaction.type === 'withdraw'
    ? acc + transaction.amount
    : acc
  , 0)

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
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
    total: 0,
  })

  console.log(totalDeposits, totalWithdraws)

  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Incoming"/>
        </header>
        <strong>
          {new Intl.NumberFormat(language, {
            style: 'currency',
            currency: 'USD'
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="Outcome"/>
        </header>
        <strong>
          {new Intl.NumberFormat(language, {
            style: 'currency',
            currency: 'USD'
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-table">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong>
          {new Intl.NumberFormat(language, {
            style: 'currency',
            currency: 'USD'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}