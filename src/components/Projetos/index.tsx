import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Notebook from "../Notebook";
import Phone from "../Phone";
import ProjectName from "../ProjectName";

import { ButtonsFrame, Container, ProjetoButtons, ProjetosContainer, ProjetosContainerActive } from "./styles";
import {  ResponseProps } from '../../pages';
import EmblaCarousel from '../Carousel';

export default function Projetos({ projects }: ResponseProps){

  const teste = [1, 2, 3, 4, 5, 6]
  
  return (
    <Container>
      <EmblaCarousel 
        slides={projects.phoneProjects} 
        platform={'Phone'}
      />
      <EmblaCarousel 
        slides={projects.notebookProjects} 
        platform={'Notebook'}
      />
    </Container>
  )
}

