import React, { Component } from 'react';
import projects from '../data/projects.json';
import Project from "./Project.js"



class Projects extends Component {
  render() {
    return(
        <div>
            {projects.allProjects.map(function(item, index){
                return <Project key={`project${index}`} title={item.title} imgName={item.imgName} description={item.description}/>
            })}
        </div>
    )
  }
}

export default Projects;
