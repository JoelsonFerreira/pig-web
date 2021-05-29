import styles from "../styles/Nav.module.css";

import Link from "next/link";

import { useState } from "react";

export default function NavBar() {

    const [ displayMenu, setDisplayMenu  ] = useState("-200px");

    function toggleMenu() {
        if(displayMenu == "-200px") {
            setDisplayMenu("50px");
        } else {
            setDisplayMenu("-200px");
        }
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.cantos}>
                <Link href="/">
                    <a>
                        <img className={styles.logo} src="/icon/safari-pinned-tab.svg" width={50} height={50} ></img>
                    </a>
                </Link>
                <button className={styles.hamburguer} onClick={toggleMenu}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </button>
            </div>
            <div className={styles.menu} style={{top: displayMenu}}>
                <Link href="/">
                    <a className={styles.item}>Home</a>
                </Link>
                {/* <Link href="https://github.com/PIGDevUff/PigDev">
                    <a className={styles.item} target="blank">Downloads</a>
                </Link> */}
                <Link href="/docs">
                    <a className={styles.item}>Documentação</a>
                </Link>
                <Link href="/tutorial">
                    <a className={styles.item}>Tutorial</a>
                </Link>
                <Link href="/install">
                    <a className={styles.item}>Instalação</a>
                </Link>
            </div>
            <div className={styles.cantos}>
                <a href="https://github.com/PIGDevUff/PigDev" className={styles.downloadBtn} target="blank">
                    <img src="./icon/github.svg" width={25} alt="github icon" />
                    Download
                </a>
            </div>
        </nav>
    )
}