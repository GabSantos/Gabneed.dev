import { useEffect, useState } from "react";
import Head from "next/head";
import {FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

import Notebook from "../components/Notebook";
import Phone from "../components/Phone";
import ProjectName from "../components/ProjectName";
import Button from "../components/Button";

import Tecnologias from "../components/Tecnologias";
import Footer from "../components/Footer";
 
import foto from '../public/images/foto.png';

import { ProjetosContainer, ProjetosContainerActive, Projetos, ButtonsFrame, ProjetoButtons } from "../styles/projetos";
import { Foto, FotoContainer, FotoMask, Sobre, SobreContainer, SobreDescription, SobreText, Titulo } from "../styles/sobre";


export default function Home() {
  



  return (
    <>
      <Sobre>
        <SobreContainer>
          <Titulo>Need a dev?</Titulo>
          <SobreDescription>
            <SobreText>
              Opa, tudo certo? Sou o Gabriel Santos, 
              um desenvolvedor de software apaixonado 
              por uma galáxia muito muito distante...
            </SobreText>
          </SobreDescription>
        </SobreContainer>
        <FotoContainer>
          <FotoMask>
            <Foto
              src={foto}
              alt='minha foto'
              width={500}
              height={600}
              objectFit="cover"
            />
          </FotoMask>
        </FotoContainer>
      </Sobre>

      <Projetos>
        <ProjetosContainer>
          <Phone active={false} />
          <Phone active={false} />
          <ProjetosContainerActive>
            <ProjectName name={'GoPizza'}/>
            <Phone active={true} />
          </ProjetosContainerActive>
          <Phone active={false} />
          <Phone active={false} />
          <ButtonsFrame>
            <ProjetoButtons >

            </ProjetoButtons>
          </ButtonsFrame>
        </ProjetosContainer> 

        <ProjetosContainer>
          <Notebook active={false} />
          <ProjetosContainerActive>
            <ProjectName name={'GoPizza'} />
            <Notebook active={true} />
          </ProjetosContainerActive>
          <Notebook active={false} />
        </ProjetosContainer>
      </Projetos>

      <Tecnologias />
      <Footer />
    </>
  )
}
 