import React, { Component } from "react";
import codingProjects from "./codingProjects.json";
import videoProjects from "./videoProjects.json";
import MNOrchProjects from "./MNOrchProjects.json";
import recordingProjects from "./recordingProjects.json";
import Coding from "./Coding";
import Videos from "./Videos";
import MNOrch from "./MNOrch";
import Recordings from "./Recordings";
import { Container, Row, Col } from 'react-bootstrap'
import "./style.css"
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
     
       <Container>
       <h2>GitHub Projects</h2>
       <Row>
          {this.state.codingProjects.map(project => (
            
            <Col>
            <Coding
            id={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
            />
            </Col>
            
          
          ))}
         </Row> 
         </Container>
     
     <Container><h2>Minnesota Orchestra Projects</h2>
     <Row>
     {this.state.MNOrchProjects.map(project => (
       <Col>
       <MNOrch
       id={project.id}
       title={project.title}
       description={project.description}
       imageUrl={project.imageUrl}
       liveLink={project.liveLink}
       githubLink={project.githublink}
       />
       </Col>
     ))}
     </Row>
     </Container>
     <Container>
      <Row>
     <h2>Recordings</h2>
     {this.state.recordingProjects.map(project => (
       <Col>
       <Recordings
       id={project.id}
       iframeTag={project.iframeTag}
       title={project.title}
       />
       </Col>
       
     ))}
     </Row>
     </Container>
     <h2>Videos</h2>
     <Container>
       <Row>
     {this.state.videoProjects.map(project => (
       <Col>
       <Videos
       id={project.id}
       iframeTag={project.iframeTag}
       title={project.title}
       />
       </Col>
     ))}</Row></Container>
</div>
      );
    }
  }
  
  export default Projects;