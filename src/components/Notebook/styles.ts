import styled from "styled-components"
import Image from "next/image"
type NotebookProps = {
  active: boolean;
}

const Frame = styled.div<NotebookProps>`
  background: #101010;
  height: 231px;
  width: 351px;
  border-radius: 12px 12px 0 0;
  align-items: center;
  justify-content: center;
  display: flex;
  ${({ active }) => active && `
    height: 330px;
    width: 500px;
  `}
`;

const Keyboard = styled.div<NotebookProps>`
  background: #6F6F6F;
  height: 7px;
  width: 430px;
  border-radius: 4px 4px 0 0;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  ${({ active }) => active && `
    height: 10px;
    width: 612px;
  `}
`

const Base = styled.div<NotebookProps>`
  background: #323232;
  height: 7px;
  width: 430px;
  border-radius: 0 0 40px 40px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: relative;
  ${({ active }) => active && `
    height: 10px;
    width: 612px;
  `}
  //box-shadow: 0px 6px 10px rgba(16, 16, 16, 1);
`

const Spacing = styled.div<NotebookProps>`
  background: #323232;
  height: 16px;
  width: 58px;
  position: absolute;
  top: -11px;
  left: 186px;
  border-radius: 40px;
  ${({ active }) => active && ` 
    height: 20px;
    width: 88px;
    left: 262px;
    top: -13px;
  `}
`;

const Screen = styled(Image)`
  border-radius: 6px;
`;

const Container = styled.div<NotebookProps>`
  height: auto;
  width: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ active }) => active && ` 
    width: 612px;
  `}
`;

export {
  Container,
  Keyboard,
  Spacing,
  Screen,
  Frame,
  Base
}