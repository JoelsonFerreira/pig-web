import NavBar from "../components/navbar";
import { useState } from "react";

import styles from "../styles/Docs.module.css";

export default function Download() {
    const [selectedItem, setSelectedItem] = useState("");

    const items = [{
            key: "Objetos",
            items: [
                "CriaObjeto",
                "MoveObjeto",
                "SetDimensoesObjeto"
            ]
        }, {
            key: "Animações",
            items: [
                "CriaAnimacao",
                "CriaFrameAnimacao"
            ]
        }
    ];

    const menu = items.map(item => (
        <li>
            <a onClick={e => {
                if(selectedItem != item.key)
                    setSelectedItem(item.key);
                else
                    setSelectedItem("");
            }}>
                {item.key}
            </a>

            {
                selectedItem == item.key ?
                    <ul style={{display: "block"}} className={styles.sublist}>
                        {item.items.map(subitem => <li><a>{subitem}</a></li>)}
                    </ul>
                :
                    <ul className={styles.sublist}>
                        {item.items.map(subitem => <li><a>{subitem}</a></li>)}
                    </ul>
            }
        </li>
    ));

    return (
        <div className={styles.container}>
            <header>
                <NavBar />
            </header>
            <main>
                <aside>
                    <ul>
                        {menu}
                    </ul>
                </aside>
                <section>
                    ishaidiansdmaosmdm
                </section>
            </main>
        </div>
    )
}
