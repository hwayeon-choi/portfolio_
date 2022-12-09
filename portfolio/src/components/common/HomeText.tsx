import styled from 'styled-components';

const HomeTextBox = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 0.75rem;
  & > p:nth-child(1) {
    width: 120px;
    height: 40px;
    background-color: #31326B;
    color: #fff;
    border-radius: 60px;
    line-height: 40px;
    text-align: center;
    border: 1px solid black;
  }
  & > p:nth-child(2) {
    width: 120px;
    height: 40px;
    color: #31326B;
    border-radius: 60px;
    line-height: 40px;
    text-align: center;
    border: 1px solid black;
  }
`

const HomeText = () => {

  return (
    <HomeTextBox>
    </HomeTextBox>
  )
}

export default HomeText;