import styled from "styled-components";
import Image from 'next/image';

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const TecnologiasContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px 0;
  width: 1700px;
  overflow-x: auto;
  @media(max-width: 1920px) {
      width: 1400px;
    }
    @media(max-width: 1440px){
      width: 1000px;
    }
    @media(max-width: 1024px) {
      width: 800px;
    }
  > abbr {
    margin: 0 30px;
    min-height: 100px;
    min-width: 100px;
  }

`;

const TecnologiasText = styled.text`
  font-size: 48px;
  color: #EBECED;
  font-family: 'Poppins', sans-serif;
`;

const Tech = styled(Image)`
  min-height: 100px;
  min-width: 100px;
`;
export { 
  Container,
  TecnologiasContainer,
  TecnologiasText,
  Tech,
}