import Head from "next/head";
import Notebook from "../components/Notebook";
import Phone from "../components/Phone";

import foto from '../public/images/foto.png';

import { ProjetosContainer, ProjetosContainerActive, ProjectFrame, ProjectName, Projetos } from "../styles/projetos";
import { Foto, FotoContainer, FotoMask, Sobre, SobreContainer, SobreDescription, SobreText, Titulo } from "../styles/sobre";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabneed.dev</title>
      </Head>
      <Sobre>
        <SobreContainer>
          <Titulo>Need a dev?</Titulo>
          <SobreDescription>
            <SobreText>
              Opa, tudo certo? Sou o Gabriel Santos, um desenvolvedor de software apaixonado por uma galáxia muito muito distante...
            </SobreText>
          </SobreDescription>
        </SobreContainer>
        <FotoContainer>
          <FotoMask>
            <Foto
              src={foto}
              alt='minha foto'
              width={400}
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
            <ProjectFrame>
              <ProjectName>Name</ProjectName>
            </ProjectFrame>
            <Phone active={true} />
          </ProjetosContainerActive>
          <Phone active={false} />
          <Phone active={false} />
        </ProjetosContainer> 

        <ProjetosContainer>
          <Notebook active={false} />
          <ProjetosContainerActive>
            <ProjectFrame>
              <ProjectName>Name</ProjectName>
            </ProjectFrame>
            <Notebook active={true} />
          </ProjetosContainerActive>
          <Notebook active={false} />
        </ProjetosContainer>
      </Projetos>
    </>
  )
}
