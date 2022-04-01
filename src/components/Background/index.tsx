import { useEffect, useRef, useState } from "react";
import { Container, Bola } from "./styles";

type GenerateBolaProps = {
  height: number;
  width: number;
}


export default function Background({ height, width }) {
  const bolas = [];
  const [loading, setLoading] = useState(true);
  const RandomSize = (max: number, min: number) => {
    return Math.floor(Math.random() * max) + min;
  }

  const generateBolas = () => {
    const [top, left] = [ RandomSize(height + 100, -100), RandomSize(width + 100, -100)]
    return { size: RandomSize(450, 48), top, left }
  }

  if(typeof window !== "undefined") {
    for(let i = 0; i < RandomSize(100, 40); i++) {
      bolas.push(generateBolas())
    }
  }

  return (
    <Container height={height}>
      { 
        bolas.map((bola, i) => (
          <Bola key={i} size={bola.size} top={bola.top} left={bola.left} />
        ))
      }
    </Container>
  )
}