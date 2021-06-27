import React , {Component} from 'react';

import MyBio from './Portfolio/Bio'
import MyTimeline from './Portfolio/Timeline'
import GitProjects from './Portfolio/GitProjects'
import MySkills from './Portfolio/Skills'

import FadeElement from './FadeElement'

import UT_ECE from '../assets/UTECE.png'

import {
    makeStyles,
    Container,
} from '@material-ui/core';

const classes = makeStyles((theme) => ({
    fadeTop: {
        display: 'flex',
        marginTop: 400,
        marginBottom: 200,
    },
    fadeEl: {
        display: 'flex',
        margin: 'auto'
    },
    fadeImage: {
        display: 'flex',
        marginTop: 500,
        marginBottom: 500,
        margin: 'auto',
        justifyContent:'center', 
        alignItems:'center', 
    }
}));

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Container className={classes.fadeImage} style={{marginTop: 100, marginBottom: 100}}>
                    <FadeElement part stiffness='160' damping='100'>
                        <Container maxWidth="2400px" style={{display: 'flex', margin: 'auto', justifyContent:'center', alignItems:'center'}}>
                                <img src={UT_ECE} style={{opacity: 1, maxWidth: "1900px"}} width="70%" />
                        </Container>
                    </FadeElement>
                </Container>

                <Container className={classes.fadeTop}>
                    <FadeElement part stiffness='160' damping='100'><MyBio /></FadeElement>
                </Container>
                <Container className={classes.fadeEl}>
                    <FadeElement><MyTimeline /></FadeElement>
                </Container>
                <Container className={classes.fadeEl}>
                    <FadeElement><MySkills /></FadeElement>
                </Container>
                <Container className={classes.fadeEl}>
                    <FadeElement><GitProjects /></FadeElement>
                </Container>
            </div>
        );
    }
}

export default Home;