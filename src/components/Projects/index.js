import React, { Component } from "react";
import codingProjects from "./codingProjects.json";
import videoProjects from "./videoProjects.json";
import MNOrchProjects from "./MNOrchProjects.json";
import recordingProjects from "./recordingProjects.json";
import Coding from "./Coding";
import Videos from "./Videos";
import MNOrch from "./MNOrch";
import Recordings from "./Recordings";
class Projects extends Component {
    state = {
      codingProjects,
      videoProjects,
      MNOrchProjects,
      recordingProjects
    };
  
    render() {
      return (
     <div>
          {this.state.codingProjects.map(project => (
            <div key={project.id}>
            <br></br>
            <Coding
            id={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            liveLink={project.liveLink}
            githubLink={project.githublink}
            />
            <br></br>
            </div>
          ))}
     </div>
      );
    }
  }
  
  export default Projects;