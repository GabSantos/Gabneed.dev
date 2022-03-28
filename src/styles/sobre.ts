import styled from "styled-components";
import Image from 'next/image';

const Sobre = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 60px;
`;

const SobreContainer = styled.div`
  width: 660px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 200px;
  margin-top: 100px;
`;

const SobreDescription = styled.div`
  background: rgba(0, 0, 0, 0.48);
  border: 3px solid rgba(0, 0, 0, 0.48);
  border-radius: 15px;
  padding: 24px;
  backdrop-filter: blur(5px);
  height: 100%;
`;

const SobreText = styled.text`
  font-size: 24px;
  color: #EBECED;
  font-family: 'Poppins', sans-serif;

`;

const Titulo = styled.text`
  margin-top: 10px;
  font-size: 64px;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 40px;
`;

const FotoContainer = styled.div`
  position: relative;
  min-width: 500px;
  min-height: 500px;
  border-radius: 50%;
  background: linear-gradient(180deg, #393E46 20%, #00FFF5 150%);
  border: solid 0px #393E46;
  margin-top: 100px;
`;

const FotoMask = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 600px;
  width: 500px;
  border-radius: 250px;
  overflow: hidden;

`;

const Foto = styled(Image)`
`;

export { 
  Sobre,
  SobreContainer,
  SobreDescription,
  SobreText,
  Titulo,
  FotoContainer,
  FotoMask,
  Foto
}