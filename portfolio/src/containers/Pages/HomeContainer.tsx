import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1480px;
  margin-top: 100px;
  margin-bottom: 70px;
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
const Intro = styled.div`
  width: 500px;
  height: 700px;
  margin-left: 50px;
  background-color: #909090;
`

const Home = () => {
  return (
    <Wrapper>
      <Profile>
      </Profile>
      <Intro>
        <p>hello</p>
        <p>introduce</p>
        <div>
          <div>KOREAN</div>
          <div>JAPANESE</div>
        </div>
        <p>Korean or Japanese text</p>
      </Intro>
    </Wrapper>
  )
}

export default Home;
