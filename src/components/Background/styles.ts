import styled, { keyframes } from "styled-components"

type Props = {
  height: number
}

const Container = styled.div<Props>`
  position: absolute;
  overflow: hidden;
  height: ${({ height }) => height}px;
  width: 100%;
  z-index: -1;
`;

type BolaProps = {
  size: number;
  top: number;
  left: number;
}

const Bola = styled.div<BolaProps>`
  position: absolute;
  background: #00fff530;
  width: ${ props => props.size }px;
  height: ${ props => props.size }px;
  border-radius: 50%;
  left: ${ props => props.left }px;
  top: ${ props => props.top }px;
`;

const animation = keyframes`
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
`

// .background {
//   position: fixed;
//   width: 100vw;
//   height: 100vh;
//   top: 0;
//   left: 0;
//   background: #3E1E68;
//   overflow: hidden;
// }

// .background span {
//   width: 2vmin;
//   height: 2vmin;
//   border-radius: 2vmin;
//   backface-visibility: hidden;
//   position: absolute;
//   animation: move;
//   animation-duration: 21;
//   animation-timing-function: linear;
//   animation-iteration-count: infinite;
// }

// .background span:nth-child(0) {
//   color: #E45A84;
//   top: 31%;
//   left: 71%;
//   animation-duration: 99s;
//   animation-delay: -284s;
//   transform-origin: -10vw 4vh;
//   box-shadow: 4vmin 0 0.9962620306895744vmin currentColor;
// }

export {
  Container,
  Bola,
}