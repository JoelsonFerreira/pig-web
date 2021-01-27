import { useState, useRef, useEffect } from "react";
import Card   from "./card";
import styles from "../styles/Card.module.css";
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

function Indicator({color, onClick}) {
    return (
        <div 
            onClick={onClick}
            className={styles.indicator}
            style={{
                backgroundColor: color,
                width: 15,
                height: 15, 
                borderRadius: "50%",
                margin: "20px 5px",
                cursor: "pointer",
            }}
        ></div>
    )
}

export default function Carousel({users}) {

    const [pos, setPos]     = useState(0);
    const [width, setWidth] = useState(0);
    
    const cardRef = useRef(null);
    
    useEffect(() => {
        if(cardRef.current) {
            setWidth(cardRef.current.offsetWidth);
        }
    }, [cardRef.current]);

    function prev() {
        if(pos + 1 <= 0)
            setPos(pos + 1);
        else
            setPos(-users.length+1);
    }
    
    function next() {
        if(pos - 1 > -users.length)
            setPos(pos - 1);
        else
            setPos(0);
    }

    return (
        <div>
            <div className={styles.carousel}>
                <button className={styles.button} onClick={prev}>
                    <IoIosArrowBack size={50} color="#555" />
                </button>

                <div className={styles.container} ref={cardRef}>
                    {users.map((user, index) => 
                        <Card 
                            key={index}
                            name={user.name}
                            bio={user.bio}
                            avatar={user.avatar_url}
                            video={user.video}
                            pos={(pos+index)*width}
                        />
                    )}
                </div>
                
                <button className={styles.button} onClick={next}>
                    <IoIosArrowForward size={50} color="#555" />
                </button>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                {users.map((user, index) => (
                    index == -pos ? 
                        <Indicator color="#770099" onClick={() => setPos(-index)} /> : 
                        <Indicator color="#ccc" onClick={() => setPos(-index)} />
                ))}
            </div>
        </div>
    );
}
