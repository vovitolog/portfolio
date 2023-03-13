import React from "react";
import classes from "./Skill.module.css";

export const Skill = (props) => {
    return <div className={classes.skill}>{props.name}</div>
}