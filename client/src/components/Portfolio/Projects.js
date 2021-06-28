import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';

import venmo_electron from '../../assets/venmo_electron.png'
import hacktx2020 from '../../assets/hacktx2020.png'
import thisSite from '../../assets/thisSite.png'
import mdSlides from '../../assets/mdslides.png'
import mos from '../../assets/mos.png'
import ascii_diagram from '../../assets/ascii_diagram.png'

function createProject(title, description, image, link, tags) {
    return {title, description, image, link, tags}
}

const projectCards = [
                    createProject(
                        "Markdown Slides", 
                        "A web based slide editor/renderer that uses markdown for quick and easy editing", 
                        mdSlides, 
                        "https://www.xige.page/markdown-render/",
                        ['React', 'Material UI']
                    ),
                    createProject(
                        "MOS", 
                        "A Hobby Operating System built for x86 that was inspired after completing the PINTOS labs done in my Operating Systems.", 
                        mos, 
                        "https://github.com/mxchen2001/mos",
                        ['NASM', 'C', 'Makefile', 'In-Progress']
                        ),
                    createProject(
                        "Ascii Diagrams", 
                        "A web based app that generates ascii diagram based on a simple markup style input.", 
                        ascii_diagram, 
                        "https://www.xige.page/ascii-diagrams/",
                        ['React', 'Material UI', 'In-Progress']
                    ),
                    createProject(
                        "This Website", 
                        "This website is built using React an Material UI and the Parallax is built using React. This gives a quick overview of my UT life. ", 
                        thisSite, 
                        "https://github.com/mxchen2001/mxchen2001.github.io",
                        ['TailwindCSS', 'React', 'Material UI']
                    ),
                    createProject(
                        "Hack TX", 
                        "A NLP app built using React that that uses Google's NLP engine that gives feedback to help students with job inteviews.", 
                        hacktx2020, 
                        "https://github.com/ishan0102/hacktx-20",
                        ['React', 'Material UI', 'Python']
                    ),
                    createProject(
                        "Vemno Automation", 
                        "Built using ElectronJS and Python that allows you to send a large scale transaction using a spreadsheet to multiple users", 
                        venmo_electron, 
                        "https://github.com/mxchen2001/Venmo-Automation",
                        ['ElectronJS', 'Python']
                    ),
                ];


function ProjectCards(props) {
    return (
        <a href={props.link}>
            <div class="cursor-pointer hover:bg-gray-100 max-w-sm rounded overflow-hidden shadow-lg">
                <img class="h-10" class="lazy" src={props.image} alt={props.title}/>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{props.title}</div>
                    <p class="text-gray-700 text-base">
                        {props.text}
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    {props.tags.map((value, index) => (
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{value}</span>
                    )
                    )}
                </div>
            </div>
        </a>
    );
}

class Projects extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return (
            <div class="pt-10 pb-10 pr-4 pl-4 grid items-center xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {projectCards.map((el) => (
                    <div class="flex flex-col justify-center items-center">
                        <ProjectCards title={el.title} text={el.description} image={el.image} tags={el.tags} link={el.link} />
                    </div>
                ))}
            </div>
        );
    }
}

export default Projects;