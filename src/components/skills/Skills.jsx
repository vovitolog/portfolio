import React from "react";
import classes from "./Skills.module.css";
import styleContainer from "../../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return <section className={classes.skillsBlock}>
        <div className={`${styleContainer.container} ${classes.skillsContainer}`}>
            <h2>Skills</h2>
            <div className={classes.skills}>
                <Skill name={'HTML'}/>
                <Skill name={'CSS'}/>
                <Skill name={'JS'}/>
            </div>
        </div>
    </section>
}