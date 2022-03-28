import { FaGithub } from 'react-icons/fa';


import { Frame, Git, Linkedin, Mail } from "./styles";

type IconProps  = {
  icon?: string,
  onClick?: () => void,
}
 
export default function Icon({ icon, onClick, ...rest }: IconProps) {
  

  return (
    <Frame onClick={onClick} {...rest}>
      { icon === 'github' && <Git size={48} /> }
      { icon === 'linkedin' && <Linkedin size={48} /> }
      { icon === 'mail' && <Mail size={48} /> }
    </Frame>
  )
}