import React, { useState } from "react";
import Navbar from "../Navbar/Navbar"
import styles from "./Certifications.module.css"



const Certifications = () => {

  const cert = [
    {
      image:
        "https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677896631/certificados/henry_ufvx4s.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677896406/certificados/diploma-npm_page-0001_kfiaev.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677896406/certificados/diploma-react-native_page-0001_cqmdzk.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677896406/certificados/diploma-prework-windows_page-0001_nlgkab.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677896406/certificados/diploma-prework-linux_page-0001_suhb2h.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677896405/certificados/diploma-frontend-developer_page-0001_hhaf0z.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677896405/certificados/diploma-javascript-practico_page-0001_z4zwhd.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677896405/certificados/diploma-asincronismo-js_page-0001_fdmmyy.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677896405/certificados/diploma-git-github_page-0001_rsdlg9.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677896405/certificados/diploma-ecmascript-6_page-0001_qd0ecl.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677896405/certificados/diploma-frontend-developer-practico_page-0001_nlxeoy.jpg",
    },
    {
      image:
        "https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677896404/certificados/diploma-basico-javascript_page-0001_cbvxty.jpg",
    },
  ];

  const [visible, setVisible] = useState(2);

  const moreCert = () => {
    setVisible((prevValue) => prevValue + 2);
  };

  return (
    <div className={styles["container-certifications"]}>
      <Navbar />
      <div className={styles["title-certifications"]}>
        <h1 className={styles["h1-certifications"]}>Certifications</h1>
      </div>
      <div className={styles["img-certifications"]}>
        <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1682121126/cute-astronaut-doing-yoga-on-moon-astronaut-icon-concept-flat-cartoon-style-suitable-for-web-landing-page-banner-flyer-sticker-card-vector-removebg-preview_1_wzsxea.png" alt="astronauta" width={350} height={350} />
      </div>
      <div className={styles["cards-certifications"]}>
        <span className={styles["span-certifications"]}></span>
        {cert.slice(0, visible).map((certItem, index) => (
          <div className={`card card-${index}`} key={index}>
            <img src={certItem.image} alt={`Certificado ${index}`}/>
          </div>
        ))}
      </div>
      <div className={styles["button-div-certifications"]}>
        {visible < cert.length && (
          <button
          className={styles["button-certifications"]}
            onClick={moreCert}
          >
            See More..
          </button>
        )}
      </div>


    </div>
  );
};

export default Certifications;