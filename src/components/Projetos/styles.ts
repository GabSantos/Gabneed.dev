import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const ProjetosContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  > div {
    margin: 0 80px;
  }
  position: relative;
  overflow: hidden;
`;

const ProjetosContainerActive = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  background: none;
  border: none;
`;

const ButtonsFrame = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  //background: #ff000020;
`;

const ProjetoButtons = styled.button`
  flex: 1;
  background: none;
  border: none;

`;



export { 
  ProjetosContainer,
  ProjetosContainerActive,
  Container,
  ButtonsFrame,
  ProjetoButtons
};
