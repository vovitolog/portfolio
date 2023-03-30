import React from "react";
import classes from "./Projects.module.css";
import styleContainer from "../../common/styles/Container.module.css"
import {Project} from "./project/Project";
import socialNetwork from "../../assets/images/social-network.png"
import taskManager from "../../assets/images/task-manager-dark.jpg"
import inProgress from "../../assets/images/under-construction.jpg"

export const Projects = () => {
    return <section className={classes.projectsBlock}>
        <div className={`${styleContainer.container} ${classes.projectsContainer}`}>
            <h2>My Projects</h2>
            <div className={classes.projects}>
                <Project name={"Social Network"} img={socialNetwork} description = {"Social Network"}/>
                <Project name={"Task Manager"} img={taskManager} description = {"Task Manager"}/>
                <Project name={"In Progress"} img={inProgress} description = {"In Progress"}/>
            </div>
        </div>
    </section>
}