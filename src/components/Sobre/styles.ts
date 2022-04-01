import styled from "styled-components";
import Image from 'next/image';

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 60px;
  margin-top: 30px;
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
  text-shadow: 
    0.0px 10.0px 0.02px #393E46, 
    9.8px 2.1px 0.02px #393E46, 
    4.2px -9.1px 0.02px #393E46, 
    -8.0px -6.0px 0.02px #393E46, 
    -7.6px 6.5px 0.02px #393E46, 
    4.8px 8.8px 0.02px #393E46, 
    9.6px -2.8px 0.02px #393E46, 
    -0.7px -10.0px 0.02px #393E46, 
    -9.9px -1.5px 0.02px #393E46, 
    -3.5px 9.4px 0.02px #393E46, 
    8.4px 5.4px 0.02px #393E46, 
    7.1px -7.0px 0.02px #393E46, 
    -5.4px -8.4px 0.02px #393E46, 
    -9.4px 3.5px 0.02px #393E46, 
    1.4px 9.9px 0.02px #393E46, 
    10.0px 0.8px 0.02px #393E46, 
    2.9px -9.6px 0.02px #393E46, 
    -8.7px -4.8px 0.02px #393E46, 
    -6.6px 7.5px 0.02px #393E46, 
    5.9px 8.0px 0.02px #393E46, 
    9.1px -4.1px 0.02px #393E46, 
    -2.1px -9.8px 0.02px #393E46, 
    -10.0px -0.1px 0.02px #393E46, 
    -2.2px 9.8px 0.02px #393E46, 
    9.1px 4.2px 0.02px #393E46, 
    6.1px -8.0px 0.02px #393E46, 
    -6.5px -7.6px 0.02px #393E46, 
    -8.8px 4.7px 0.02px #393E46, 
    2.7px 9.6px 0.02px #393E46, 
    10.0px -0.6px 0.02px #393E46, 
    1.5px -9.9px 0.02px #393E46, 
    -9.3px -3.6px 0.02px #393E46, 
    -5.5px 8.4px 0.02px #393E46, 
    7.0px 7.2px 0.02px #393E46, 
    8.5px -5.3px 0.02px #393E46, 
    -3.4px -9.4px 0.02px #393E46, 
    -9.9px 1.3px 0.02px #393E46, 
    -0.8px 10.0px 0.02px #393E46, 
    9.6px 2.9px 0.02px #393E46, 
    4.9px -8.7px 0.02px #393E46, 
    -7.5px -6.7px 0.02px #393E46, 
    -8.1px 5.9px 0.02px #393E46, 
    4.0px 9.2px 0.02px #393E46, 
    9.8px -2.0px 0.02px #393E46, 
    0.2px -10.0px 0.02px #393E46, 
    -9.7px -2.3px 0.02px #393E46, 
    -4.3px 9.0px 0.02px #393E46, 
    7.9px 6.1px 0.02px #393E46
`;

const FotoContainer = styled.div`
  position: relative;
  min-width: 500px;
  min-height: 500px;
  border-radius: 50%;
  background: linear-gradient(180deg, #393E46 20%, #00FFF5 150%);
  border: solid 20px #393E46;
  margin-top: 100px;
`;

const FotoMask = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 580px;
  width: 460px;
  border-radius: 250px;
  overflow: hidden;

`;

const Foto = styled(Image)`
`;

export { 
  Container,
  SobreContainer,
  SobreDescription,
  SobreText,
  Titulo,
  FotoContainer,
  FotoMask,
  Foto
}