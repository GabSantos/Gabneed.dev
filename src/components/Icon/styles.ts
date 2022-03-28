import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import styled from "styled-components"


const Frame = styled.button`
  border: none;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  background: none;
  margin: 0 18px;
`;



const Git = styled(FaGithub)`
  color: #00fff5;
  :hover {
    color: #00ADB5;
  }
`;

const Linkedin = styled(FaLinkedin)`
  color: #00fff5;
  :hover {
    color: #00ADB5;
  }
`;

const Mail = styled(SiGmail)`
  color: #00fff5;
  :hover {
    color: #00ADB5;
  }
`;

export {
  Frame,
  Git,
  Linkedin,
  Mail
}