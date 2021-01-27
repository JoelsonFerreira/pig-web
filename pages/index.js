import Link     from "next/link";
import NavBar   from "../components/navbar";
import Carousel from "../components/carousel";
import Typing   from '../node_modules/react-typing-animation';
import styles   from "../styles/Home.module.css";
import examples from "../data/users.json";

export default function Home({users}) {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.about}>
        <Typing> <span className = {styles.title} > Programming Interface For Games</span> </Typing>
        <p className={styles.description}>There were other JS typing animations that existed when I created this, but they were all lacking in robust features. This component aims to support all of the following features</p>
        <div>
            <a href="https://github.com/PIGDevUff/PigDev" className={styles.downloadBtn} target="blank">
              Download
            </a>

          <Link href="/tutorial">
            <a className={styles.tutorialBtn}>
              Tutorial
            </a>
          </Link>
        </div>
      </div>

      <Carousel users={users} />

    </div>
  )
}

export async function getStaticProps(context) {
  const users = await Promise.all(examples.map(async ex => {
    const res  = await fetch(`https://api.github.com/users/${ex.username}`);
    const {avatar_url, name, bio} = await res.json();  

    return {avatar_url, name, bio, video: ex.video};
  }));

  return {
    props: {
      users
    },
  }
}

/*
  Home
  Forum
  Downloads
  Documentação
  Tutorial
  Instalação
*/