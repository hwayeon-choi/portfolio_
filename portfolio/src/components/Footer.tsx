import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const FooterBox = styled.div`
  width: 1480px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-family: 'LINESeedKR-Bd';
  position: fixed;
  bottom: 0;
  background-color: #31326B;
`
const Call = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`
const Email = styled.div`
  width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`

const Footer = () => {
  return (
    <>
      <FooterBox>
        <Call>
          <div>CALL</div>
          <div>+82-10-4024-2117</div>
        </Call>
        <Email>
          <div>E-MAIL</div>
          <div>hwayeon.choi11@gmail.com</div>
        </Email>
      </FooterBox>
      <Outlet />
    </>
  )
}

export default Footer;