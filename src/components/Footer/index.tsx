
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

  const handleRedirect = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if(newWindow){
      newWindow.opener = null;
    }
  }

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
          <Button
            onClick={() => handleRedirect('https://firebasestorage.googleapis.com/v0/b/gabneed-dev.appspot.com/o/about%2FGabriel_Santos.pdf?alt=media&token=03bf7674-d20b-4c25-9834-ab222354a6cf')}
          >Currículo</Button>
          <Icon icon="github" onClick={() => handleRedirect('https://github.com/GabSantos/')}/>
          <Icon icon="linkedin" onClick={() => handleRedirect('https://www.linkedin.com/in/gabriel-ag-santos/')}/>
          {/* <Icon icon="mail" onClick={() => handleRedirect('https://github.com/GabSantos/')}/> */}
        </FooterButtons>
        <Thanks>May the force be with you</Thanks>
      </FooterContainer>
    </Container>
  )
}