import styled from "styled-components"


const Frame = styled.button`
  border: none;
  height: 48px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0 18px;
  margin: 0 22px;
  background: #00fff5;
  :hover {
    background: #00ADB5;
  }
`;



const Text = styled.text`
  margin-right: 10px;
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  color: #222831;
`;

export {
  Frame,
  Text
}