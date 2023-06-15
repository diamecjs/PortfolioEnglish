import React from "react";
import styles from "./Projects.module.css"

const Projects = () => {

    return (
        <div className={styles["principal-projects"]}>
            <div className={styles["container-projects"]}>
                <h1 className={styles["h1-projects"]}>Projects</h1>
            </div>
            <div className={styles["cohete-projects"]}>
                <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1682105094/Cohete_ztsddr.gif" alt="cohete" />
            </div>
            <div className={styles["cards-projects"]}>
                <div className={styles["cards-1"]}>
                    <div className={styles["card-front"]}>
                        <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677876777/Sin_t%C3%ADtulo_gqtddm.png" alt="Donde suena"/>
                    </div>
                    <div className={styles["card-back"]}>
                        <h1>Donde Suena? - Henry Projects</h1>
                        <p> Donde Suena It is a group project where we use all the knowledge acquired in the Soy Henry bootcamp, it is a web application to purchase tickets to musical events, and additionally it has a social sector where underground bands can post and share info and shows with their followers.
                        </p>
                        <div className={styles["card-back-imgcontainer"]}>
                            <a href="https://github.com/aouriarte/DondeSuena" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/889/889192.png?w=740&t=st=1682110284~exp=1682110884~hmac=0e9ccae0138bb6c2746e38460025f76c092e94e35800da925da88cdff386d9b4" alt="" width={65} height={65} className={styles["card-back-img"]} />
                            </a>
                            <a href="https://dondesuena-front.vercel.app/" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/1201/1201519.png?w=740&t=st=1682110410~exp=1682111010~hmac=cbe0fa9c9ba50c02d24dcaa2f4084aeadb2a6414005ef3c0452d5314a8012dd4" alt="" width={50} height={50} className={styles["card-back-img"]} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles["cards-2"]}>
                    <div className={styles["card-front"]}>
                        <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677876778/Dise%C3%B1o_sin_t%C3%ADtulo_19_jdrxfe.png" alt="Ecomerce"/>
                    </div>
                    <div className={styles["card-back"]}>
                        <h1>Hardware Store</h1>
                        <p>Cpj hardware store It is a basic eccommerce for a hardware store, where you can view products separated by categories.
                            Additionally, as page admin you can add and remove products on the site.
                        </p>
                        <div className={styles["card-back-imgcontainer"]}>
                            <a href="https://github.com/diamecjs/CPJ--Back" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/889/889192.png?w=740&t=st=1682110284~exp=1682110884~hmac=0e9ccae0138bb6c2746e38460025f76c092e94e35800da925da88cdff386d9b4" alt="" width={65} height={65} className={styles["card-back-img"]} />
                            </a>
                            <a href="https://cpjferreteria.vercel.app/" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/1201/1201519.png?w=740&t=st=1682110410~exp=1682111010~hmac=cbe0fa9c9ba50c02d24dcaa2f4084aeadb2a6414005ef3c0452d5314a8012dd4" alt="" width={50} height={50} className={styles["card-back-img"]} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles["cards-3"]}>
                    <div className={styles["card-front"]}>
                        <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1677876777/Dise%C3%B1o_sin_t%C3%ADtulo_18_fwu3aw.png" alt="Pi-videogames"/>
                    </div>
                    <div className={styles["card-back"]}>
                        <h1>Videogames Projects - Soy Henry</h1>
                        <p>Game world is an individual project carried out for Soy Henry's bootcamp, where I tested the knowledge acquired in it, using API REST</p>
                        <div className={styles["card-back-imgcontainer"]}>
                            <a href="https://github.com/diamecjs/Pi-Videogames" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/889/889192.png?w=740&t=st=1682110284~exp=1682110884~hmac=0e9ccae0138bb6c2746e38460025f76c092e94e35800da925da88cdff386d9b4" alt="" width={65} height={65} className={styles["card-back-img"]} />
                            </a>
                            <a href="https://pi-videogames-pearl-seven.vercel.app/" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/1201/1201519.png?w=740&t=st=1682110410~exp=1682111010~hmac=cbe0fa9c9ba50c02d24dcaa2f4084aeadb2a6414005ef3c0452d5314a8012dd4" alt="" width={50} height={50} className={styles["card-back-img"]} />
                            </a>
                        </div>
                    </div>
                </div>
            
                  <div className={styles["cards-3"]}>
                    <div className={styles["card-front"]}>
                        <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1683661592/233788062-1303704b-153b-4954-b9c6-de77433a177a_pxbkri.png" alt="Portamor"/>
                    </div>
                    <div className={styles["card-back"]}>
                        <h1>Project Portamor</h1>
                        <p>This is a project carried out for the NGO Portamor-Pe for older adults. The idea of ​​this project was to bring older adults closer to a platform to access online courses from the comfort of their homes.</p>
                        <div className={styles["card-back-imgcontainer"]}>
                            <a href="https://github.com/portamor/curso" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/889/889192.png?w=740&t=st=1682110284~exp=1682110884~hmac=0e9ccae0138bb6c2746e38460025f76c092e94e35800da925da88cdff386d9b4" alt="" width={65} height={65} className={styles["card-back-img"]} />
                            </a>
                            <a href="" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/1201/1201519.png?w=740&t=st=1682110410~exp=1682111010~hmac=cbe0fa9c9ba50c02d24dcaa2f4084aeadb2a6414005ef3c0452d5314a8012dd4" alt="" width={50} height={50} className={styles["card-back-img"]} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles["cards-3"]}>
                    <div className={styles["card-front"]}>
                        <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1683661960/mar_y_arte_web_md1osn.png" alt="Mar y Arte"/>
                    </div>
                    <div className={styles["card-back"]}>
                        <h1>Mar y Arte</h1>
                        <p>Mar y Arte is a personal project for one's own business, the website is fully responsive, it has an administrator login that gives access to add, edit and delete products. In addition, as a customer you can also use a shopping cart for more comfort.</p>
                        <div className={styles["card-back-imgcontainer"]}>
                            <a href="https://github.com/diamecjs/maryarte" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/889/889192.png?w=740&t=st=1682110284~exp=1682110884~hmac=0e9ccae0138bb6c2746e38460025f76c092e94e35800da925da88cdff386d9b4" alt="" width={65} height={65} className={styles["card-back-img"]} />
                            </a>
                            <a href="https://maryarte.vercel.app/" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/1201/1201519.png?w=740&t=st=1682110410~exp=1682111010~hmac=cbe0fa9c9ba50c02d24dcaa2f4084aeadb2a6414005ef3c0452d5314a8012dd4" alt="" width={50} height={50} className={styles["card-back-img"]} />
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className={styles["cards-3"]}>
                    <div className={styles["card-front"]}>
                        <img src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1686847608/Dise%C3%B1o_sin_t%C3%ADtulo_dzjxxo.png" alt="Memoriate"/>
                    </div>
                    <div className={styles["card-back"]}>
                        <h1>Memoriate</h1>
                        <p>Memoriate is a memory game 🧠🤔 created with React Native and CSS, simple and fun 🤩</p>
                        <div className={styles["card-back-imgcontainer"]}>
                            <a href="https://github.com/diamecjs/AwesomeProject" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/889/889192.png?w=740&t=st=1682110284~exp=1682110884~hmac=0e9ccae0138bb6c2746e38460025f76c092e94e35800da925da88cdff386d9b4" alt="" width={65} height={65} className={styles["card-back-img"]} />
                            </a>
                            <a href="https://drive.google.com/file/d/18_ILlxchhUU9Ue-MfHn45U5OwVcoebpm/view?usp=sharing" target="_blank">
                                <img src="https://cdn-icons-png.flaticon.com/512/1201/1201519.png?w=740&t=st=1682110410~exp=1682111010~hmac=cbe0fa9c9ba50c02d24dcaa2f4084aeadb2a6414005ef3c0452d5314a8012dd4" alt="" width={50} height={50} className={styles["card-back-img"]} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>

    );
};

export default Projects;