import { createContext } from 'react';
import styled from 'styled-components';
import Language from '../../components/common/Language';
import HomeText from '../../components/common/HomeText';

const LngContext = createContext();

function LngProvider({ children }: any) {
  const LngState = useState("kor");
  return (
    <LngContext.Provider>
      {children}
    </LngContext.Provider>
  );   
}

const Home = () => {
  return (
    <Wrapper>
      <Profile />
      <LngProvider>
        <div>
          <Language />
          <HomeText />
        </div>
      </LngProvider>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 1480px;
  margin-top: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'LINESeedKR-Bd';
  & > div {
    
  }
`
const Profile = styled.div`
  width: 500px;
  height: 600px;
  margin-right: 300px;
  display: flex;
  align-items: center;
  background-color: #B7B6E0;
  border-radius: 60px;
`

export default Home;
