import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderBox = styled.div`
  width: 1480px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Logo = styled.div`
  width: 1480px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Menu = styled.div`
  width: 1480px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Header = () => {
  return (
    <>
      <HeaderBox>
        <Logo>
          <Link to='/'>
            <p>HWAYEON CHOI / FRONTEND DEVELOPER</p>
          </Link>
        </Logo>
        <Menu>
          <ul>
            <li>ABOUT ME</li>
            <li>RESUME</li>
            <li>PROJECTS</li>
            <li>CONTACT</li>
          </ul>
        </Menu>
      </HeaderBox>
    </>
  )
}

export default Header;