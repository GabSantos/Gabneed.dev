
import { Frame, Name } from "./styles";

type ProjectProps = {
  name: string
}

export default function Phone({ name, ...rest }: ProjectProps) {


  return (
    <Frame {...rest}>
        <Name>{name}</Name>
    </Frame>
  )
}