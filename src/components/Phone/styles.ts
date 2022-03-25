import styled from "styled-components"
import Image from "next/image"

type PhoneProps = {
  active: boolean;
}

const Frame = styled.div<PhoneProps>`
  background: #00ADB5;
  box-shadow: inset 0px 0px 20px #0E3E62;
  height: 245px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  ${({ active }) => active && `
    height: 350px;
    width: 180px;
  `}
`;

const Border = styled.div<PhoneProps>`
  background: #000;
  height: 234px;
  width: 117px;
  margin: 0 4px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: relative;
  ${({ active }) => active && `
    height: 335px;
    width: 168px;
  `}
`

const Speaker = styled.div<PhoneProps>`
  background: #000;
  height: 15px;
  width: 57px;
  position: absolute;
  top: 0;
  left: 30px;
  border-radius: 40px;
  ${({ active }) => active && `
    height: 20px;
    width: 88px;
    left: 40px;
  `}
`;

const Screen = styled(Image)`
  //background: linear-gradient(180deg, #393E46 -11.9%, #000000 111.93%);
  height: 222px;
  width: 107px;
  border-radius: 12px;
  
`;

export {
  Frame,
  Border,
  Speaker,
  Screen
}