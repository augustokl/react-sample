import Modal from "react-modal";
import { TransactionsProvider } from "./hooks/useTransactionsContext";
import { TransactionModalProvider } from "./hooks/useTransactionModalContext";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  return (
    <TransactionsProvider>
      <TransactionModalProvider>
        <Header />
        <Dashboard />
        <NewTransactionModal />
        <GlobalStyle />
      </TransactionModalProvider>
    </TransactionsProvider>
  );
}