import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderBox = styled.div`
  width: 1480px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'LINESeedKR-Bd';
  position: fixed;
  top: 0;
`
const Logo = styled.div`
  width: 740px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > a {
    text-decoration-line: none;
  }
  & > a:link {
    color: #31326B;
  }
  & > a:visited {
    color: #31326B;
  }
`
const Menu = styled.div`
  width: 780px;
  & > ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
  }
  & > ul > a {
    width: 150px;
    display: flex;
    justify-content: center;
    text-decoration-line: none;
  }
  & > ul > a:link {
    color: #31326B;
  }
  & > ul > a:visited {
    color: #31326B;
  }
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
            <Link to='/about'>
              <li>ABOUT ME</li>
            </Link>
            <Link to='/resume'>
              <li>RESUME</li>
            </Link>
            <Link to='/project'>
              <li>PROJECTS</li>
            </Link>
            <Link to='/contact'>
              <li>CONTACT</li>
            </Link>
          </ul>
        </Menu>
      </HeaderBox>
      <Outlet />
    </>
  )
}

export default Header;