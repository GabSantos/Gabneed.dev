
import { Border, Frame, Speaker, Screen } from "./styles";

import foto from '../../public/images/screen.png';

type PhoneProps  ={
  active: boolean,
  src?: StaticImageData | any
  className?: string
  onClick: () => void
}
 
export default function Phone({ active, src, onClick, ...rest }: PhoneProps) {
  

  return (
    <Frame active={active} onClick={onClick} {...rest}>
      <Border active={active}>
        <Screen  
          loader={!src ? () => src : () => {}}
          unoptimized
          src={!src ? foto : src} 
          width={active ? 153 : 107}
          height={active ? 320 : 222}
          objectFit="cover"
        />
        <Speaker active={active}/>
      </Border>
    </Frame>
  )
}