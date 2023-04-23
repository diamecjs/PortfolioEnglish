import React from "react";
import styles from "./ContactMe.module.css"



const ContactMe = () => {

    return (
        <div className={styles["contactme-principal"]}>
            <div className={styles["contactme-title"]}>
                <div className={styles["content"]}>
                    <p className={styles["contactme-p"]}>[</p>
                    <p className={styles["contactme-p"]}>Contactame</p>
                    <ul className={styles["contactme-ul"]}>
                        <li className={styles["contactme-li"]}>Aqui</li>
                        <li className={styles["contactme-li"]}>Ahora!</li>
                    </ul>
                    <p className={styles["contactme-p"]}>]</p>
                </div>
            </div>
            <div className={styles["contactme-icons"]}>
            <a className={styles["a-contactme"]} href="mailto:diame.cjs@gmail.com" target="_blank">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2875/2875394.png"
                    width={60}
                    height={60}
                />
            </a>
            <a
                className={styles["a-contactme"]}
                href="https://www.linkedin.com/in/diamela-lares-" target="_blank"
            >
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1383/1383262.png"
                    width={60}
                    height={60}
                />
            </a>
            <a className={styles["a-contactme"]} href="https://www.github.com/diamecjs" target="_blank">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2504/2504911.png"
                    width={60}
                    height={60}
                />
            </a>
            <a className={styles["a-contactme"]} href="https://wa.me/573148880850" target="_blank">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1383/1383269.png"
                    width={60}
                    height={60}
                />
            </a>
            <img className={styles["astronauta-contactme"]}
            src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1682095873/HD-wallpaper-astronaut-black-space-plane-removebg-preview_is1kxi.png" />
            </div>
            <div className={styles["button-descarga"]}> 
            <a
            href="https://drive.google.com/file/d/1nPRjsKDq7ePcKWk6fbiAXzMMb7b4Jv94/view?usp=share_link " target="_blank"
            download="CV Diamela"
          >
            <button className={styles["button-des"]}>Descarga Curriculum</button>
            </a>
            </div>
        </div>
    );
};

export default ContactMe;