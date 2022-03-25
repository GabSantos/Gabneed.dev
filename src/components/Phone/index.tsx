
import { Border, Frame, Speaker, Screen } from "./styles";

import foto from '../../public/images/screen.png';

type PhoneProps  ={
  active: boolean,
  src?: StaticImageData | any
}
 
export default function Phone({ active, src, ...rest }: PhoneProps) {
  

  return (
    <Frame active={active} {...rest}>
      <Border active={active}>
        <Screen  
          src={!src ? foto : src} 
          width={active ? 153 : 107}
          height={active ? 320 : 222}
        />
        <Speaker active={active}/>
      </Border>
    </Frame>
  )
}