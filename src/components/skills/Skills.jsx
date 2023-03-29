import React from "react";
import classes from "./Skills.module.css";
import styleContainer from "../../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";
import ts from "../../assets/icons/ts.svg"
import css from "../../assets/icons/css.svg"
import react from "../../assets/icons/react.svg"
import storybook from "../../assets/icons/storyBook.svg"
import redux from "../../assets/icons/redux.svg"
import js from "../../assets/icons/js.svg"
import jest from "../../assets/icons/jest.svg"
import sass from "../../assets/icons/sass.svg"
import html from "../../assets/icons/html.svg"
import git from "../../assets/icons/git-.svg"
import nodejs from "../../assets/icons/nodejs.svg"
import material from "../../assets/icons/material.svg"
import mongo from "../../assets/icons/mongo.svg"
import express from "../../assets/icons/express.svg"

export const Skills = () => {
    return <section className={classes.skillsBlock}>
        <div className={`${styleContainer.container} ${classes.skillsContainer}`}>
            <h2>Skills</h2>
            <div className={classes.skills}>
                <Skill name={'TypeScript'} img={ts}/>
                <Skill name={'React'} img={react}/>
                <Skill name={'CSS'} img={css}/>
                <Skill name={'Storybook'} img={storybook}/>
                <Skill name={'Redux'} img={redux}/>
                <Skill name={'JavaScript'} img={js}/>
                <Skill name={'Jest'} img={jest}/>
                <Skill name={'SASS'} img={sass}/>
                <Skill name={'HTML'} img={html}/>
                <Skill name={'GIT'} img={git}/>
                <Skill name={'Node.js'} img={nodejs}/>
                <Skill name={'Material UI'} img={material}/>
                <Skill name={'Mongo DB'} img={mongo}/>
                <Skill name={'Express JS'} img={express}/>
            </div>
        </div>
    </section>
}