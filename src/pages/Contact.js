import React from "react";
import SmokeyCat from '../Assets/Smokey.jpg';
import StevensCat from '../Assets/stevens.jpg';
import "./style.css";


function Contact() {
  
      return (
        <div className="container">
          <div>
        <h1>Contact</h1>
        </div>
        
            <section className="col-md-12">
              <article>
              <p>
              I'm available for freelance work producing music or video.
              </p>
              <h3>Get in Touch!</h3>
              </article>
            <section className = "row">
          
                <article className="col-md-6">
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                    </svg> 
                    <b>Email</b>: <a href="mailto:fmerchlewitz@mnorch.org" title="Frank Merchlewitz Work Email">fmerchlewitz@mnorch.org</a>
                    </p>
                    <p><b>OR: </b><a href="mailto:fmerchlewitz@outlook.org" title="Frank Merchlewitz Personal Email">fmerchlewitz@outlook.edu</a></p>
                </article>
                <article className="col-sm-6">
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                        <path fill-rule="evenodd" d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                      </svg> <b>Phone:</b> 507-450-6019
                    </p>   
                </article>
                </section>
                </section>
                </div>         
      );
    }
  
  
  export default Contact;