import React from "react";
import classes from "./About.module.css";
import photo from "../../assets/images/vladimir.jpg"

export const About = () => {
    return <section className={classes.about}>
        <div className={classes.aboutContainer}>
            <div className={classes.person}>
                <div className={classes.personText}>
                    <span>Hi There</span>
                    <h2 className={classes.title}>
                        {'I’m '}
                        <span>Vladimir Rodionov</span>
                    </h2>
                    <p>Frontend Developer</p>
                </div>
                <div className={classes.personContact}>
                    <span className={classes.personContactText}>  Download my curriculum vitae:
                    </span>
                    <div className={classes.buttonsWrapper}>
                        <a className={classes.button}>DOWNLOAD CV</a>
                        <a className={classes.button}>CONTACT ME</a>
                    </div>

                </div>
            </div>
            <div className={classes.photoWrapper}>
                <img className={classes.photo} src={photo} alt="Фото Владимир"/>
            </div>
        </div>
    </section>
}