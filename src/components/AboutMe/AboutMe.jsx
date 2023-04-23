import React from "react";
import styles from "./AboutMe.module.css"

const AboutMe = () => {

    return (
        <div className={styles["Container-aboutme"]}>
            <h1 className={styles["h1-aboutme"]}>About Me
                <span className={`${styles["dot"]} ${styles["dot1"]}`}>.</span>
                <span className={`${styles["dot"]} ${styles["dot2"]}`}>.</span>
                <span className={`${styles["dot"]} ${styles["dot3"]}`}>.</span>
            </h1>

            <p className={styles["p-aboutme"]}>
            Hello! I am a full stack developer, my approach to software development is based on agile methodologies, which allows me to adapt to changes and work collaboratively as a team. I like to work on exciting and challenging projects that allow me to constantly learn and improve my skills. When I'm not working on software projects, I like to explore new technologies and learn about the latest trends in web development. I also love sharing my knowledge and experience with the developer community through blogs, chats, and other means. If you are interested in my work or want to know more about my experience and skills, do not hesitate to contact me.
            </p>

        </div>
    );
};

export default AboutMe;