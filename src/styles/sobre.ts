import styled from "styled-components";
import Image from 'next/image';

type PhoneProps = {
  active: boolean;
}

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
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 200px;
  margin-top: 100px;
`;

const SobreDescription = styled.div`
  background: rgba(0, 0, 0, 0.48);
  border: 3px solid rgba(0, 0, 0, 0.24);
  border-radius: 15px;
  padding: 24px;
  backdrop-filter: blur(5px);
  box-shadow: 
    inset -5px -5px 15px rgba(255, 255, 255, 0.08), 
    inset 10px 10px 15px rgba(0, 0, 0, 0.25);  
  ;
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
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(180deg, #393E46 20%, #00FFF5 150%);
  border: solid 0px #393E46;
  margin-top: 100px;
`;

const FotoMask = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 500px;
  border-radius: 200px 200px 200px 200px;
  overflow: hidden;

`;

const Foto = styled(Image)`
  width: 380px;
  height: auto;
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