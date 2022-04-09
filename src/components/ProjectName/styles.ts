import styled from "styled-components";

const Frame = styled.div`
  background: rgba(0, 0, 0, 0.48);
  border: 3px solid rgba(0, 0, 0, 0.48);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 5px 30px;
  margin-bottom: 30px;
  margin-top: 120px;
  max-width: fit-content;
`;

const Name = styled.text`
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
`;


export {
  Frame,
  Name
}