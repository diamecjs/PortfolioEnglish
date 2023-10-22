import React from "react";
import styles from "./Footer.module.css"



const Footer = () => {

    return (
        <div className={styles["container-footer"]}>
            <p className={styles["primer-p"]}>📧 Mail</p> <p className={styles["segundo-p"]}> diame.cjs@gmail.com</p>
            <p className={styles["primer-p"]}>📱 Phone</p> <p  className={styles["segundo-p"]}> 🇨🇴 +57 314 888 08 50 - 🇺🇾 +598 96 218 481</p>
            <p className={styles["primer-p"]}>📍 Location </p><p  className={styles["segundo-p"]}> Piriápolis - Uruguay</p>

        </div>
    );
};

export default Footer;
