
import React from "react";

function Coding(props) {
    return(
    
   
    
      <div>
              <a href={props.liveLink} target="_blank" title={props.title}><img src={props.imageUrl} alt={props.title}/></a> <br /><br />
            
           
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <p><a href={props.liveLink} title={props.title} target="_blank">Check it out &gt;</a></p>
                <p><a href={props.githubLink} title={props.title} target="_blank">Github Repo</a></p>
            
        </div>
    )
}

export default Coding;



