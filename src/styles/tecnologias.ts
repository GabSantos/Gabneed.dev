import styled from "styled-components";
import Image from 'next/image';

const Tecnologias = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  padding: 0 60px;
`;

const TecnologiasContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px 0;
  width: 100%;

  background: rgba(255, 255, 255, 0.12);
  border: 3px solid rgba(255, 255, 255, 0.24);
  box-sizing: border-box;
  backdrop-filter: blur(5px);
  border-radius: 120px;

`;

const TecnologiasText = styled.text`
  font-size: 48px;
  color: #EBECED;
  font-family: 'Poppins', sans-serif;
`;

const Tech = styled(Image)`
`;

export { 
  Tecnologias,
  TecnologiasContainer,
  TecnologiasText,
  Tech
}