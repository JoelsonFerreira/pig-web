import NavBar from "../components/navbar";
import { useRef, useState } from "react";

import styles from "../styles/Docs.module.css";

export default function Download() {
    const [selectedItem, setSelectedItem] = useState("");

    const menuRef = useRef(null);

    const items = [{
            key: "Objetos",
            items: [
                "CriaObjeto",
                "CriaObjetoOffScreen",
                "GetFrameAtualObjeto",
                "DestroiObjeto",
                "GetXYObjeto",
                "MoveObjeto",
                "DeslocaObjeto",
                "SetAnguloObjeto",
                "GetAnguloObjeto",
                "SetPivoAbsolutoObjeto",
                "SetPivoProporcionalObjeto",
                "GetPivoObjeto",
                "SetFlipObjeto",
                "GetFlipObjeto",
                "SetDimensoesObjeto",
                "GetDimensoesObjeto",
                "GetDimensoesOriginaisObjeto",
                "RestauraDimensoesOriginaisObjeto",
                "CriaFrameObjeto",
                "CarregaArquivoFramesObjeto",
                "CarregaFramesPorLinhaObjeto",
                "CarregaFramesPorColunaObjeto",
                "MudaFrameObjeto",
                "SetColoracaoObjeto",
                "SetOpacidadeObjeto",
                "GetOpacidadeObjeto",
                "DesenhaObjeto",
                "DesenhaObjetoOffScreen",
                "TestaColisaoObjetos",
                "DefineAreaColisaoObjeto",
                "DefineRaioColisaoObjeto",
                "DefineTipoColisaoObjeto",
                "GetPixelsObjeto",
                "AtualizaPixelsObjeto",
                "InsereTransicaoObjeto",
                "ExecutandoTransicaoObjeto",
                "LeArquivoTransicaoObjeto",
                "IniciaAutomacaoObjeto",
                "TrataAutomacaoObjeto",
                "DefineTipoTransicaoObjeto",
                "LimpaTransicoesObjeto",
                "InsereAcaoObjeto"
            ]
        }, {
            key: "Animações",
            items: [
                "CriaAnimacao",
                "CriaAnimacaoDeObjeto",
                "DestroiAnimacao",
                "CriaFrameAnimacao",
                "CarregaArquivoFramesAnimacao",
                "CarregaFramesPorLinhaAnimacao",
                "CarregaFramesPorColunaAnimacao",
            ]
        }
    ];

    const toggleMenu = () => {
        console.log(menuRef.current.display);

        if(menuRef.current.style.display == "block") {
            menuRef.current.style.display = "none";
        } else {
            menuRef.current.style.display = "block";
        }
    }

    const menu = items.map(item => (
        <li key={item.key}>
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
                        {item.items.map((subitem, index) => <li key={index}><a>{subitem}</a></li>)}
                    </ul>
                :
                    <ul className={styles.sublist}>
                        {item.items.map((subitem, index) => <li key={index}><a>{subitem}</a></li>)}
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
                <aside ref={menuRef}>
                    <ul>
                        {menu}
                    </ul>
                </aside>
                <section>
                    ishaidiansdmaosmdm
                </section>
            </main>
            <button className={styles.menuButton} onClick={toggleMenu}></button>
        </div>
    )
}
