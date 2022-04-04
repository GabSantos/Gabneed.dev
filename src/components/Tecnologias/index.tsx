
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
          <abbr title='Javascript'><Tech src={Js} alt="Js logo" height={96} width={96} objectFit="contain"/></abbr>
          <abbr title='Typescript'><Tech src={Ts} alt="Ts logo" height={96}  width={96} objectFit="contain"/></abbr>
          <abbr title='React JS'><Tech src={ReactJs} alt="React logo" height={96} width={85} objectFit="contain"/></abbr>
          <abbr title='NodeJS'><Tech src={Node} alt="Node logo" height={96} width={85} objectFit="contain"/></abbr>
          <abbr title='Github'><Tech src={Github} alt="Github logo" height={96} width={96} objectFit="contain"/></abbr>
          <abbr title='Firebase'><Tech src={Firebase} alt="Firebase logo" height={96} width={70} objectFit="contain"/></abbr>
          <abbr title='MySQL'><Tech src={Mysql} alt="Mysql logo" height={96} width={184} objectFit="contain"/></abbr>
          <abbr title='Docker'><Tech src={Docker} alt="Docker logo" height={96} width={133} objectFit="contain"/></abbr>
        </TecnologiasContainer>
      </Container>
  )
}