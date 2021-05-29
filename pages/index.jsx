import Link     from "next/link";
import NavBar   from "../components/navbar";
import Carousel from "../components/carousel";
import Typing   from 'react-typing-animation';
import styles   from "../styles/Home.module.css";
import examples from "../data/users.json";

export default function Home({users}) {
  return (
    <div className={styles.container}>
      <header>
        <NavBar />
      </header>
      
      <main>
        <div className={styles.about}>
          <Typing> <span className = {styles.title} > Programming Interface For Games</span> </Typing>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum cursus turpis ac sagittis. Duis erat arcu, efficitur id nibh nec, fringilla semper nisi. Phasellus semper enim sit amet sapien egestas, sed commodo neque efficitur. Integer fermentum enim ante, vel ullamcorper mauris blandit ac. Ut malesuada dignissim metus non iaculis. Sed eu justo tortor. Vivamus nec sollicitudin eros. Donec semper varius augue nec sagittis. Nulla facilisi. Phasellus sed lectus vel eros posuere commodo.
          </p>
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
      </main>
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
