import { createContext } from 'react';
import { useAsyncValue } from 'react-router-dom';
import styled from 'styled-components';

const Language = () => {
  
  const LanguageContext = createContext("kor");

  return (
    <LanguageContext.Provider value="kor">
      <LanguageBox>
        <div>KOREAN</div>
        <div>JAPANESE</div>
      </LanguageBox>
    </LanguageContext.Provider>
  )
}

const LanguageBox = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 0.75rem;
  & > div:nth-child(1) {
    width: 120px;
    height: 40px;
    background-color: #31326B;
    color: #fff;
    border-radius: 60px;
    line-height: 40px;
    text-align: center;
    border: 1px solid black;
  }
  & > div:nth-child(2) {
    width: 120px;
    height: 40px;
    color: #31326B;
    border-radius: 60px;
    line-height: 40px;
    text-align: center;
    border: 1px solid black;
  }
`

export default Language;