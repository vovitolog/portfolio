import React from "react";
import classes from "./Project.module.css";

export const Project = (props) => {
    return <div className={classes.project}>
        <img src={props.img}/>
        {props.name}
    </div>
}