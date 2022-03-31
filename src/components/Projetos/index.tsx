import { useEffect, useState } from 'react';

import Notebook from "../Notebook";
import Phone from "../Phone";
import ProjectName from "../ProjectName";

import { ButtonsFrame, Container, ProjetoButtons, ProjetosContainer, ProjetosContainerActive } from "./styles";
import {  ResponseProps } from '../../pages';

export default function Projetos({ projects }: ResponseProps){
  const [currentPhone, setCurrentPhone] = useState(0);
  const [currentNotebook, setCurrentNotebook] = useState(0);

  // Carousel controls
  const handleNextPhone = () => {
    if(currentPhone + 1 > projects.phoneProjects.length - 1){
      setCurrentPhone(0);
    } else {
      setCurrentPhone(currentPhone + 1);
    }
  }
  const handlePreviousPhone = () => {
    if(currentPhone - 1 < 0){
      setCurrentPhone(projects.phoneProjects.length - 1);
    } else {
      setCurrentPhone(currentPhone - 1);
    }
  }
  const handleNextNotebook = () => {
    if(currentNotebook + 1 > projects.notebookProjects.length - 1){
      setCurrentNotebook(0);
    } else {
      setCurrentNotebook(currentNotebook + 1);
    }
  }
  const handlePreviousNotebook = () => {
    if(currentNotebook - 1 < 0){
      setCurrentNotebook(projects.notebookProjects.length - 1);
    } else {
      setCurrentNotebook(currentNotebook - 1);
    }
  }
  const handleRedirect = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if(newWindow){
      newWindow.opener = null;
    }
  }
  useEffect(() => {
    const phoneCarousel = setTimeout(() => {
      handleNextPhone();
    }, 10000);

    return () => {
      clearTimeout(phoneCarousel);
    };
  }, [currentPhone]);
  useEffect(() => {
    const notebookCarousel = setTimeout(() => {
      handleNextNotebook();
    }, 10000);

    return () => {
      clearTimeout(notebookCarousel);
    };
  }, [currentNotebook]);
  // End carousel controls

  return (
    <Container>
      {
        projects.phoneProjects.length !== 0 ? (
          <ProjetosContainer>
            <Phone active={false} />
            <Phone active={false} />
            <ProjetosContainerActive>
              <ProjectName name={projects.phoneProjects[currentPhone].name}/>
              <Phone src={projects.phoneProjects[currentPhone].image_url} active={true} />
            </ProjetosContainerActive>
            <Phone active={false} />
            <Phone active={false} />
            <ButtonsFrame>
              <ProjetoButtons
                onClick={handlePreviousPhone}
              />
              <ProjetoButtons
                style={{
                  flex: 0.4,
                  marginRight: 80,
                  marginLeft: 80,
                }}
                onClick={() => handleRedirect(projects.phoneProjects[currentPhone].redirect)}
              />
              <ProjetoButtons
                onClick={handleNextPhone}
              />
            </ButtonsFrame>
          </ProjetosContainer> 
        ) : (
          <text>No project</text>
        )
      }
      {
        projects.notebookProjects.length !== 0 ? (
          <ProjetosContainer>
            <Notebook active={false} />
            <ProjetosContainerActive>
              <ProjectName name={projects.notebookProjects[currentNotebook].name}/>
              <Notebook src={projects.notebookProjects[currentNotebook].image_url} active={true} />
            </ProjetosContainerActive>
            <Notebook active={false} />
            <ButtonsFrame>
              <ProjetoButtons
                onClick={handlePreviousNotebook}
              />
              <ProjetoButtons
                style={{
                  flex: 1.5,
                  marginRight: 80,
                  marginLeft: 80,
                }}
                onClick={() => handleRedirect(projects.notebookProjects[currentNotebook].redirect)}
              />
              <ProjetoButtons
                onClick={handleNextNotebook}
              />
            </ButtonsFrame>
          </ProjetosContainer> 
        ) : (
          <ProjetosContainer>
            <Notebook active={false} />
            <ProjetosContainerActive>
              <ProjectName name={'No project'}/>
              <Notebook active={true} />
            </ProjetosContainerActive>
            <Notebook active={false} />
            <ButtonsFrame>
              <ProjetoButtons
                onClick={handlePreviousNotebook}
              />
              <ProjetoButtons
                style={{
                  flex: 1.8,
                  marginRight: 80,
                  marginLeft: 80,
                }}
                onClick={() => {}}
              />
              <ProjetoButtons
                onClick={handleNextNotebook}
              />
            </ButtonsFrame>
          </ProjetosContainer> 
        )
      }
    </Container>
  )
}

