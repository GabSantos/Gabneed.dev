
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import Docker from '../../public/assets/Docker.png';
import Firebase from '../../public/assets/Firebase.png';
import Github from '../../public/assets/Github.png';
import Js from '../../public/assets/Js.png';
import Mysql from '../../public/assets/Mysql.png';
import Node from '../../public/assets/Node.png';
import ReactJs from '../../public/assets/ReactJs.png';
import Ts from '../../public/assets/Ts.png';

import { Container, Tech, TecnologiasContainer, TecnologiasText } from "./styles";

export default function Tecnologias() {
  return (
    <Container>
      <TecnologiasText>Tecnologias que utilizo</TecnologiasText>
      <TecnologiasContainer>
        <abbr title='Javascript'><Tech src={Js} height={100} width={100} alt="Js logo" /></abbr>
        <abbr title='Typescript'><Tech src={Ts} height={100} width={100} alt="Ts logo" /></abbr>
        <abbr title='React'><Tech src={ReactJs} height={100} width={100} alt="React logo" /></abbr>
        <abbr title='NodeJS'><Tech src={Node} height={100} width={100} alt="Node logo" /></abbr>
        <abbr title='Github'><Tech src={Github} height={100} width={100} alt="Github logo" /></abbr>
        <abbr title='Firebase'><Tech src={Firebase} height={100} width={100} alt="Firebase logo"  /></abbr>
        <abbr title='MySQL'><Tech src={Mysql} height={100} width={100} alt="Mysql logo" /></abbr>
        <abbr title='Docker'><Tech src={Docker} height={100} width={100} alt="Docker logo" /></abbr>
      </TecnologiasContainer>
    </Container>
  )
}