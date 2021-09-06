import { createContext, ReactNode, useContext, useState } from "react";

interface TransactionsModalProviderProps {
  children: ReactNode;
}

interface TransactionsModalContextData {
  isOpen: boolean;
  onOpenNewTransactionModal: () => void;
  onRequestClose: () => void;
}

export const TransactionModalContext = createContext({} as TransactionsModalContextData)

export function TransactionModalProvider({ children }: TransactionsModalProviderProps) {
  const [isModalOpenNewTransition, setIsModalOpenNewTransition] = useState(false);

  function handleOpenModalNewTransition() {
    setIsModalOpenNewTransition(true);
  }
  function handleCloseModalNewTransition() {
    setIsModalOpenNewTransition(false);
  }

  return (
    <TransactionModalContext.Provider value={{
      isOpen: isModalOpenNewTransition,
      onOpenNewTransactionModal: handleOpenModalNewTransition,
      onRequestClose: handleCloseModalNewTransition
    }}>
      {children}
    </TransactionModalContext.Provider>
  )
}

export function useTransactionModalContext() {
  const context = useContext(TransactionModalContext)

  return context;
}