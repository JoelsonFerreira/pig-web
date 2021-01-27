import styles from "../styles/Card.module.css";

export default function Card({pos, name, bio, avatar, video, setCardHeight}) {

    return (
        <div className={styles.card} style={{left: pos}} >
            <div className={styles.profile}>
                <img className={styles.photo} src={avatar}></img>
                <div>
                    <h1 className={styles.h1}>{name}</h1>
                    <h3 className={styles.h3}>{bio}</h3>
                </div>
                <div className={styles.icons}>
                    <img src="https://parkhotel.mk/park/wp-content/uploads/2017/01/linkedin-icon.png" className={styles.icon}/>
                    <img src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png" className={styles.icon}/>
                    <img src="https://user-images.githubusercontent.com/33750251/59486444-3699ab80-8e71-11e9-9f9a-836e431dcbfd.png" className={styles.icon}/>
                </div>
            </div>
            <iframe
                className={styles.video}
                src={video}
            >
            </iframe>
        </div>
    );
}