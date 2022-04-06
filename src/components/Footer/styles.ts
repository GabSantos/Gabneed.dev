import styled, { css, keyframes } from "styled-components";


type TitleProps = {
  hasColor?: boolean,
  hasAnimation?: boolean
}

const Container = styled.div`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  `;

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.48);
  border-top: 3px solid rgba(0, 0, 0, 0.48);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  padding: 50px 60px 138px 60px;
`;

const blinkTextCursor = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

const FooterTitle = styled.text<TitleProps>`
  font-size: 48px;
  color: #EBECED;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 22px;
  ${({ hasColor }) => hasColor && `
    color: #00fff5
  `}
  
`;

const FooterLine = styled.text<TitleProps>`
  font-size: 48px;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 22px;
  color: #00fff5;
  animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;

`;

const FooterText = styled.text`
  font-size: 24px;
  color: #EBECED;
  font-family: 'Poppins', sans-serif;
`;

const FooterTitleFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Thanks = styled.text`
  font-size: 18px;
  color: #EBECED;
  font-family: 'Poppins', sans-serif;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 14px;
`;

export { 
  Container,
  FooterContainer,
  FooterTitle,
  FooterText,
  FooterTitleFrame,
  FooterButtons,
  FooterLine,
  Thanks
}