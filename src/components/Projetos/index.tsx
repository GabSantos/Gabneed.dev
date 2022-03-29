import { useEffect, useState } from 'react';
import { collection, query, getDocs, where } from 'firebase/firestore'

import Notebook from "../Notebook";
import Phone from "../Phone";
import ProjectName from "../ProjectName";

import { ButtonsFrame, Container, ProjetoButtons, ProjetosContainer, ProjetosContainerActive } from "./styles";

import { db } from '../../utils/firebase';

const queryPhone = async () => {
  const phoneQuery = query(collection(db, 'projetos'), where('platfomr', "==", 'Phone'))
  
  try {
    const querySnapshot = await getDocs(phoneQuery);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  } catch {
    console.log('Erro ao buscar projetos');
  }
}

export default function Projetos() {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    try {
      queryPhone();
    } catch {
      console.log('Erro ao buscar projetos');
    }
  }, [])

  return (
    <Container>
        <ProjetosContainer>
          <Phone active={false} />
          <Phone active={false} />
          <ProjetosContainerActive>
            <ProjectName name={'GoPizza'}/>
            <Phone active={true} />
          </ProjetosContainerActive>
          <Phone active={false} />
          <Phone active={false} />
          <ButtonsFrame>
            <ProjetoButtons >

            </ProjetoButtons>
          </ButtonsFrame>
        </ProjetosContainer> 

        <ProjetosContainer>
          <Notebook active={false} />
          <ProjetosContainerActive>
            <ProjectName name={'GoPizza'} />
            <Notebook active={true} />
          </ProjetosContainerActive>
          <Notebook active={false} />
        </ProjetosContainer>
      </Container>
  )
}