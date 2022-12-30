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
  & > div {
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 0.75rem;
    margin: 30px;
  }
`

const Footer = () => {
  return (
    <FooterBox>
      <div>
        <p>CALL</p>
        <p>+82-10-4024-2117</p>
      </div>
      <div>
        <p>E-MAIL</p>
        <p>hwayeon.choi11@gmail.com</p>
      </div>
    </FooterBox>
  )
}

export default Footer;