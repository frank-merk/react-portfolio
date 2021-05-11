import React from "react";
function Videos(props) {
    return(
       
            <div>
                  <iframe src = {props.iframeTag} allowfullscreen allow="encrypted-media"></iframe>
                  </div>
             
    
    )
}

export default Videos