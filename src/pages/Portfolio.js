import React from "react";
import Projects from "../components/Projects"
import "./style.css";
import { Container } from 'react-bootstrap'


function Portfolio() {
  
      return (
        <div>
        <Container>
        
              <h1>Portfolio</h1>

              <hr />

        <Projects />

      
          
     
      </Container>
      </div>
      );
    }
  
  
  export default Portfolio;