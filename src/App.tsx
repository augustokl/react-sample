import { useState } from "react";
import Modal from "react-modal";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isModalOpenNewTransition, setIsModalOpenNewTransition] = useState(false);

  function handleOpenModalNewTransition() {
    setIsModalOpenNewTransition(true);
  }
  function handleCloseModalNewTransition() {
    setIsModalOpenNewTransition(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenModalNewTransition}/>
      <Dashboard />

      <NewTransactionModal 
        isOpen={isModalOpenNewTransition}
        onRequestClose={handleCloseModalNewTransition}
      />
     
      <GlobalStyle />
    </>
  );
}