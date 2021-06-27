import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

import Projects from './Projects';

class GitProjects extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return (
            <Container style={{justifyContent:'center', alignItems:'center', maxWidth:'80%', marginTop: 100, marginBottom: 100,}}>
                <Typography variant="h2" color="textSecondary">
                    My Projects
                </Typography>
                <Projects/>
            </Container>
        );
    }
}

export default GitProjects;