import styles from "../styles/Home.module.css"; 

import NavBar from "../components/navbar"

import Typing from '../node_modules/react-typing-animation';

import Link from "next/link";

import { FaPlay } from 'react-icons/fa';

export default function Home() {
    return (
        <div className={styles.container}>
            <NavBar />
            <secion className={styles.about}>
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
            </secion>

            <section className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.content}></div>
                <button className={styles.play}>
                  <FaPlay color="white" />
                </button>
                <div className={styles.gif}></div>
              </div>
            </section>


        </div>
    )
    
    }

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*

/*
  Home
  Forum
  Downloads
  Documentação
  Tutorial
  Instalação

*/