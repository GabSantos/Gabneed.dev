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
  margin-top: 120px;
  overflow: hidden;
  width: 80%;
  > div {
    margin: 0 80px;
  }
`;

const ProjetosContainerActive = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ProjectFrame = styled.div`
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translate(-50%, 0);
`;

const ProjectName = styled.h2`

`;

export { 
  ProjetosContainer,
  ProjetosContainerActive,
  ProjectFrame,
  ProjectName,
  Projetos
};