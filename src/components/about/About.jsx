import React from "react";
import classes from "./About.module.css";
import styleContainer from "../../common/styles/Container.module.css"
import photo from "../../assets/images/vladimir.jpg"
import {getCLS} from "web-vitals";

export const About = () => {
    return <section className={classes.about}>
        <div className={classes.aboutContainer}>
            <div className={classes.person}>
                <div className={classes.personText}>
                    <span>Hi There</span>
                    <h2 className={classes.title}>I'm Vladimir Rodionov</h2>
                    <p>Frontend Developer</p>
                </div>
                <div className={classes.personContact}>
                    Download my curriculum vitae:
                    <p>Frontend Developer</p>
                    <p>Frontend Developer</p>
                    <p>Frontend Developer</p>
                </div>
            </div>
            <div className={classes.photoWrapper}>
                <img className={classes.photo} src={photo} alt="Фото Владимир"/>
            </div>
        </div>
    </section>
}