import styled from "styled-components";

const Projetos = styled.div`
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
`;

const ProjetosContainerActive = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;



export { 
  ProjetosContainer,
  ProjetosContainerActive,
  Projetos
};