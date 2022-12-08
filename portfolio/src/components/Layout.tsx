import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Container = styled.div`
  width: 1480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'LINESeedKR-Bd';
`

const Layout = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  )
}

export default Layout;