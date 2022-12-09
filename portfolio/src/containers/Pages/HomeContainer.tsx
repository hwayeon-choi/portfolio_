import styled from 'styled-components';
import Language from '../../components/common/Language';
import HomeText from '../../components/common/HomeText';

const Wrapper = styled.div`
  width: 1480px;
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'LINESeedKR-Bd';
`
const Profile = styled.div`
  width: 500px;
  height: 600px;
  margin-right: 50px;
  display: flex;
  align-items: center;
  background-color: #B7B6E0;
  border-radius: 60px;
`

const Home = () => {
  return (
    <Wrapper>
      <Profile />
      <div>
        <Language />
        <HomeText />
      </div>
    </Wrapper>
  )
}

export default Home;
