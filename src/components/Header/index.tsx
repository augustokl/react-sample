import { useTransactionModalContext } from '../../hooks/useTransactionModalContext';

import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'



export function Header() {
  const { onOpenNewTransactionModal } = useTransactionModalContext()
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          New Transaction
        </button>
      </Content>
    </Container>
  )
}