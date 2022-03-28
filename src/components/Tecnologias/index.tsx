
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
          <Tech src={Js} alt="Js logo" height={96} width={96} objectFit="contain"/>
          <Tech src={Ts} alt="Ts logo" height={96}  width={96} objectFit="contain"/>
          <Tech src={ReactJs} alt="React logo" height={96} width={85} objectFit="contain"/>
          <Tech src={Node} alt="Node logo" height={96} width={85} objectFit="contain"/>
          <Tech src={Github} alt="Github logo" height={96} width={96} objectFit="contain"/>
          <Tech src={Firebase} alt="Firebase logo" height={96} width={70} objectFit="contain"/>
          <Tech src={Mysql} alt="Mysql logo" height={96} width={184} objectFit="contain"/>
          <Tech src={Docker} alt="Docker logo" height={96} width={133} objectFit="contain"/>
        </TecnologiasContainer>
      </Container>
  )
}