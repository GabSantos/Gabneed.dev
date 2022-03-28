
import { useEffect, useState } from 'react';
import Button from '../Button'
import Icon from "../Icon";

import { Container, FooterButtons, FooterContainer, FooterLine, FooterText, FooterTitle, FooterTitleFrame, Thanks } from "./styles";

export default function Footer() {
  const [footerWord, setFooterWord] = useState('');
  const palavras = ['Dev?', 'Landing page?', 'Website?', 'Mobile app?']
  
  const typeWriter = (word: string, i: number, aux: number) => {
    if (i < palavras[aux].length) {
      setFooterWord(word.slice(0, i + 1));
      setTimeout(() => {
        typeWriter(word, i + 1, aux);
      }, 100);
    } else {
      setTimeout(() => {
        ereaseWriter(word, word.length, aux);
      }, 1000);
    }
  };

  const ereaseWriter = (word: string, i: number, aux: number) => {
    if (i > 0) {
      setFooterWord(word.slice(0, i - 1));
      setTimeout(() => {
        ereaseWriter(word, i - 1, aux);
      }, 100);
    } else {
      setTimeout(() => {
        if(aux < palavras.length - 1) aux++;
        else aux = 0;
        typeWriter(palavras[aux], 0, aux);
      }, 100);
    }
  };

  useEffect(() => {
    typeWriter(palavras[0], 0, 0);
  }, []);

  return (
    <Container>
        <FooterContainer>
          <FooterTitleFrame>
            <FooterTitle>Need a &nbsp;</FooterTitle>
            <FooterTitle hasColor >/</FooterTitle>
            <FooterTitle hasColor >{footerWord}</FooterTitle>
            <FooterLine >&nbsp;|</FooterLine>
          </FooterTitleFrame>
          <FooterButtons>
            <FooterText>Entre em contato.</FooterText>
            <Button>Currículo</Button>
            <Icon icon="github" />
            <Icon icon="linkedin" />
            <Icon icon="mail" />
          </FooterButtons>
          <Thanks>May the force be with you</Thanks>
        </FooterContainer>
      </Container>
  )
}