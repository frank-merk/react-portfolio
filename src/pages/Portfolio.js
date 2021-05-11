import React from "react";
import Projects from "../components/Projects"
import "./style.css";


function Portfolio() {
  
      return (
        <div>
        <main clasName="container">
          <div className="row">
            <div className="col-md-8">
              <h1>Portfolio</h1>
            </div>
          </div>
      <hr />

        <Projects />

      
          </main>
      </div>
      );
    }
  
  
  export default Portfolio;