import React from "react";
import classes from "./About.module.css";
import styleContainer from "../../common/styles/Container.module.css"
import photo from "../../assets/images/vladimir.jpg"

export const About = () => {
    return <section className={classes.about}>
        <div className={styleContainer.container}>
            <div className={classes.text}>
                <span>Hi There</span>
                <h1>I'm Vladimir Rodionov</h1>
                <p>Frontend Developer</p>
            </div>
            <div className={classes.photo}>
                <img className={classes.photo} src={photo} alt="Фото Владимир"/>
            </div>
        </div>
    </section>
}