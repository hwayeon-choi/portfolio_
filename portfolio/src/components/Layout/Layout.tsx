import Header from './Header/Header';
import Footer from './Footer/Footer';
import styled from 'styled-components';

const Container = styled.div`
  width: 1480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'LINESeedKR-Bd';
`

const Layout = (props: {
  children: React.ReactNode
}) => {
  return (
    <Container>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </Container>
  )
}

export default Layout;