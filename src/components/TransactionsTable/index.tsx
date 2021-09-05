import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionsTable () {
  const [transactions, setTransaction] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransaction(response.data.transactions));
  }, [])

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat(navigator.language, {
                    style: 'currency',
                    currency: 'USD'
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>{new Intl.DateTimeFormat(navigator.language).format(
                  new Date(transaction.createdAt)
                )}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}