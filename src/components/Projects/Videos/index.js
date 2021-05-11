import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
function Videos(props) {
    return(
       
              <Col md="6">
                  <iframe className="spotify" src = {props.iframeTag} allowfullscreen allow="encrypted-media"></iframe>
              </Col>
             
    
    )
}

export default Videos