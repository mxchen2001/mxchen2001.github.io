import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Projects from './Portfolio/Projects';

class ProjectsPage extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return (
            <div className="md:mx-24 lg:mx-24 xl:mx-24 justify-items-center items-center">
                <Projects/>
            </div>
        );
    }
}

export default ProjectsPage;