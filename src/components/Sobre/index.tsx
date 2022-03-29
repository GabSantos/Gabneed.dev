
import foto from '../../public/images/foto.png';

import { Container, Foto, FotoContainer, FotoMask, SobreContainer, SobreDescription, SobreText, Titulo } from "./styles";


export default function Sobre() {
  
  return (
    <Container>
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
      </Container>
  )
}