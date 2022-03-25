import styled from "styled-components";

const Frame = styled.div`
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translate(-50%, 0);
  background: rgba(0, 0, 0, 0.24);
  border: 3px solid rgba(0, 0, 0, 0.48);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 5px 30px;
`;

const Name = styled.text`
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
`;


export {
  Frame,
  Name
}