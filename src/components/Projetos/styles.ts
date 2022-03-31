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
  margin-top: 160px;
  width: 100%;
  > div {
    margin: 0 80px;
  }
  position: relative;
  overflow: hidden;
`;

const ProjetosContainerActive = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ButtonsFrame = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
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