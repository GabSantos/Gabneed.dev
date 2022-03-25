import styled from "styled-components";

const Footer = styled.div`
  width: 100%;
  height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.24);
  border-top: 3px solid rgba(0, 0, 0, 0.48);
  backdrop-filter: blur(5px);
  padding: 0 60px;
`;

const FooterTitle = styled.text`
  font-size: 48px;
  color: #EBECED;
  font-family: 'Poppins', sans-serif;
`;

const FooterText = styled.text`
  font-size: 48px;
  color: #EBECED;
  font-family: 'Poppins', sans-serif;
`;

export { 
  Footer,
  FooterContainer,
  FooterTitle,
  FooterText
}