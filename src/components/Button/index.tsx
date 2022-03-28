import { FaFileDownload } from 'react-icons/fa';


import { Frame, Text } from "./styles";

type ButtonProps  = {
  children?: React.ReactNode,
}
 
export default function Button({ children, ...rest }: ButtonProps) {
  

  return (
    <Frame {...rest}>
      <Text>{children}</Text>
      <FaFileDownload size={24} color="#222831" />
    </Frame>
  )
}