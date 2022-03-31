
import Head from "next/head";

import Sobre from "../components/Sobre";
import Projetos from "../components/Projetos";
import Tecnologias from "../components/Tecnologias";
import Footer from "../components/Footer";
import { GetStaticProps } from "next";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db, storage } from "../utils/firebase";
import { useEffect } from "react";
import { getDownloadURL, ref } from "firebase/storage";

export type ProjectsProps = JSX.IntrinsicAttributes &{
  image_url: string;
  name: string;
  platform: string;
  redirect: string;
}

export type ResponseProps = {
  projects: {
    phoneProjects: ProjectsProps[];
    notebookProjects: ProjectsProps[];
  },
}

export default function Home(props: ResponseProps) {


  useEffect(() => {
  }, [])


  return (
    <>
      <Head>
        
      </Head>

      <Sobre />

      <Projetos projects={props.projects}/>

      <Tecnologias />

      <Footer />
    </>
  )
}
 
export const getStaticProps: GetStaticProps = async () => {
  
  const phoneQuery = query(collection(db, 'projetos'),where('platform','==','Phone'));
  const phoneSnapshot = await getDocs(phoneQuery);
  const phoneProjects: ProjectsProps[] = [];
  phoneSnapshot.forEach((snapshot) => {
    phoneProjects.push(snapshot.data() as ProjectsProps);
  });

  const notebookQuery = query(collection(db, 'projetos'),where('platform','==','Notebook'));
  const notebookSnapshot = await getDocs(notebookQuery);
  const notebookProjects: ProjectsProps[] = [];
  notebookSnapshot.forEach((snapshot) => {
    notebookProjects.push(snapshot.data() as ProjectsProps);
  });

  const response: ResponseProps = {
      projects: {
        phoneProjects,
        notebookProjects,
      }
  }
  
  return {
    props: response
  }
}