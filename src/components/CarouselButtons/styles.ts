import styled from "styled-components";

const Prev = styled.button`
  outline: 0;
  cursor: pointer;
  background-color: transparent;
  touch-action: manipulation;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  fill: #1bcacd;
  padding: 0;
  left: 220px;
  :disabled {
    cursor: default;
    opacity: 0.3;
  }
  .embla__button__svg {
    width: 100%;
    height: 100%;
  }
`

const Next = styled.button`
  outline: 0;
  cursor: pointer;
  background-color: transparent;
  touch-action: manipulation;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  fill: #1bcacd;
  padding: 0;
  right: 220px;
  :disabled {
    cursor: default;
    opacity: 0.3;
  }
  .embla__button__svg {
    width: 100%;
    height: 100%;
  }
`

export {
  Prev,
  Next
}