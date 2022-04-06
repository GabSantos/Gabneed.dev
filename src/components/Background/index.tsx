import { useEffect, useRef, useState } from "react";
import { Container, Bola } from "./styles";
import { MersenneTwister19937, Random } from 'random-js'

type GenerateBolaProps = {
  height: number;
  width: number;
}
 

export default function Background({ height, width }) {
  const random = new Random(MersenneTwister19937.seed(10));
  const bolas = [];
  const [loading, setLoading] = useState(true);
  const [heightStep, widthStep] = [height / 16, width / 16];
  const [heightTotal, widthTotal] = [height + heightStep, width + widthStep];
  const generateBolas = (top: number, left: number) => {
    return { top, left }
  }


  if(typeof window !== "undefined") {
    for(let i = 0; i < heightTotal ; i+= heightStep) {
      for(let j = 0; j < widthTotal ; j+= widthStep){
        if(random.integer(0, 99) < 25) {
          const minPosI = i;
          const maxPosI = i + heightStep;
          const minPosJ = j;
          const maxPosJ = j + widthStep;
          const topPos = random.integer(minPosI, maxPosI);
          const leftPos = random.integer(minPosJ, maxPosJ);
          bolas.push(generateBolas(topPos, leftPos))
        }
      }
    }
  }
  return (
    <Container height={height}>
      { 
        bolas.map((bola, i) => (
          <Bola key={i} size={random.integer(30, 250)} top={bola.top} left={bola.left} />
        ))
      }
    </Container>
  )
}