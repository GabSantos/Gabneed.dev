import Head from "next/head";

import Notebook from "../components/Notebook";
import Phone from "../components/Phone";
import ProjectName from "../components/ProjectName";

import foto from '../public/images/foto.png';
import Docker from '../public/assets/Docker.png';
import Firebase from '../public/assets/Firebase.png';
import Github from '../public/assets/Github.png';
import Js from '../public/assets/Js.png';
import Mysql from '../public/assets/Mysql.png';
import Node from '../public/assets/Node.png';
import ReactJs from '../public/assets/ReactJs.png';
import Ts from '../public/assets/Ts.png';

import { ProjetosContainer, ProjetosContainerActive, Projetos } from "../styles/projetos";
import { Foto, FotoContainer, FotoMask, Sobre, SobreContainer, SobreDescription, SobreText, Titulo } from "../styles/sobre";
import { Tech, Tecnologias, TecnologiasContainer, TecnologiasText } from "../styles/tecnologias";
import { Footer, FooterContainer } from "../styles/Footer";

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
      <Tecnologias>
        <TecnologiasText>Tecnologias que utilizo</TecnologiasText>
        <TecnologiasContainer>
          <Tech src={Js} alt="Js logo" height={96} width={96} objectFit="contain"/>
          <Tech src={Ts} alt="Ts logo" height={96}  width={96} objectFit="contain"/>
          <Tech src={ReactJs} alt="React logo" height={96} width={96} objectFit="contain"/>
          <Tech src={Node} alt="Node logo" height={96} width={96} objectFit="contain"/>
          <Tech src={Github} alt="Github logo" height={96} width={96} objectFit="contain"/>
          <Tech src={Firebase} alt="Firebase logo" height={96} width={96} objectFit="contain"/>
          <Tech src={Mysql} alt="Mysql logo" height={96} width={184} objectFit="contain"/>
          <Tech src={Docker} alt="Docker logo" height={96} width={133} objectFit="contain"/>
        </TecnologiasContainer>
      </Tecnologias>

      <Footer>
        <FooterContainer>
          
        </FooterContainer>
      </Footer>
    </>
  )
}
