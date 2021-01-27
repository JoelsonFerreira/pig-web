import styles from "../styles/Nav.module.css";

import Link from "next/link";

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.cantos}>
                <Link href="/">
                    <a>
                        <img className={styles.logo} src="/icon/safari-pinned-tab.svg" width={50} height={50} ></img>
                    </a>
                </Link>
            </div>
            <div className={styles.menu}>
                <Link href="/">
                    <a className={styles.item}>Home</a>
                </Link>
                <Link href="https://github.com/PIGDevUff/PigDev">
                    <a className={styles.item} target="blank">Downloads</a>
                </Link>
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
            <div className={styles.cantos}></div>
        </nav>
    )
}