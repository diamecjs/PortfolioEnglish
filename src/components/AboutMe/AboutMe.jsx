import React from "react";
import styles from "./AboutMe.module.css"

const AboutMe = () => {

    return (
        <div className={styles["Container-aboutme"]}>
            <h1 className={styles["h1-aboutme"]}>Sobre mi
                <span className={`${styles["dot"]} ${styles["dot1"]}`}>.</span>
                <span className={`${styles["dot"]} ${styles["dot2"]}`}>.</span>
                <span className={`${styles["dot"]} ${styles["dot3"]}`}>.</span>
            </h1>

            <p className={styles["p-aboutme"]}>
                ¡Hola! Soy full stack developer, mi enfoque en el desarrollo de software se basa en metodologías ágiles, lo que me permite adaptarme a los cambios y trabajar de manera colaborativa en equipo. Me gusta trabajar en proyectos emocionantes y desafiantes que me permitan aprender y mejorar constantemente mis habilidades. Cuando no estoy trabajando en proyectos de software, me gusta explorar nuevas tecnologías y aprender sobre las últimas tendencias en el desarrollo web. También me encanta compartir mis conocimientos y experiencia con la comunidad de desarrolladores a través de blogs, charlas y otros medios. Si estás interesado en mi trabajo o quieres saber más sobre mi experiencia y habilidades, no dudes en ponerse en contacto conmigo.
            </p>

        </div>
    );
};

export default AboutMe;