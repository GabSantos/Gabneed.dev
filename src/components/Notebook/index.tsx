
import { Base, Frame, Keyboard, Screen, Spacing, Container } from "./styles";

import foto from '../../public/images/screenNote.png';

type NotebookProps = {
  active: boolean, 
  src?: StaticImageData | any
}

export default function Notebook({ active, src, ...rest }: NotebookProps) {


  return (
    <Container active={active}>
      <Frame active={active}>
        <Screen
          src={!src ? foto : src} 
          width={active ? 480 : 337}
          height={active ? 310 : 217}
          objectFit="cover"
        />
      </Frame>
      <Keyboard active={active}>
        <Spacing active={active}/>
      </Keyboard>
      <Base active={active} />
    </Container>
  )
}