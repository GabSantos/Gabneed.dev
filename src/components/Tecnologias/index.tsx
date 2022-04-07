
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
          <abbr title='Javascript'><Tech src={Js} alt="Js logo" objectFit="contain"/></abbr>
          <abbr title='Typescript'><Tech src={Ts} alt="Ts logo" objectFit="contain"/></abbr>
          <abbr title='React'><Tech src={ReactJs} alt="React logo" objectFit="contain"/></abbr>
          <abbr title='NodeJS'><Tech src={Node} alt="Node logo" objectFit="contain"/></abbr>
          <abbr title='Github'><Tech src={Github} alt="Github logo" objectFit="contain"/></abbr>
          <abbr title='Firebase'><Tech src={Firebase} alt="Firebase logo"  objectFit="contain"/></abbr>
          <abbr title='MySQL'><Tech src={Mysql} alt="Mysql logo" objectFit="contain"/></abbr>
          <abbr title='Docker'><Tech src={Docker} alt="Docker logo" objectFit="contain"/></abbr>
        </TecnologiasContainer>
      </Container>
  )
}