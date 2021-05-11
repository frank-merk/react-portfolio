import React from "react";

function Recordings(props) {
    return(
        
          <div className="col-md-4">
              <p>
                  <iframe className="spotify" src = {props.iframeTag} allowfullscreen allow="encrypted-media"></iframe>
              </p>
            </div>
    )
}

export default Recordings

  // "id": 8,
  //       "title": "General B and The Wiz",
  //       "altTag": "General B and The Wiz",
  //       "iframeTag":