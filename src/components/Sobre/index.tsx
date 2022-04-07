
import foto from '../../public/images/foto.png';

import { Container, Foto, FotoContainer, FotoMask, SobreContainer, SobreDescription, SobreText, Titulo } from "./styles";


export default function Sobre() {
  const src = "https://firebasestorage.googleapis.com/v0/b/gabneed-dev.appspot.com/o/about%2FPhoto.png?alt=media&token=fa3ac0d1-fbf7-4703-af02-424206326411";
  
  return (
    <Container>
      <SobreContainer>
        <Titulo>Need a dev?</Titulo>
        <SobreDescription>
          <SobreText>
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industrys 
            standard dummy text 
          </SobreText>
        </SobreDescription>
      </SobreContainer>
      <FotoContainer>
        <FotoMask>
          <Foto
            loader={() => src}
            unoptimized
            src={src}
            alt='minha foto'
            width={420}
            height={560}
            objectFit="cover"
          />
        </FotoMask>
      </FotoContainer>
    </Container>
  )
}