import React from "react";
import { ImageBackground, Text, View } from "react-native";
import SmokeyCat from '../Assets/Smokey.jpg';
import StevensCat from '../Assets/stevens.jpg';
import styles from "./style.css";
import reactDom from 'react-dom';
const image = "https://frank-merk.github.io/bootcamp-03-homework/Assets/bkgdImage.jpg";


function Home() {
  
      return (
        <div>
     <img src = {image} title = "Hero Image" className = "hero-image" />

        <main className="container">
            <h1>About Me</h1>
        <div className="row">
          <div className="col-xl-9">
            <section class="col-md-12">
              <article>
              <p>
                 My Name is Frank Merchlewitz, and I'm a musician and video producer from Minneapolis, Minnesota. I grew up in Winona, Minnesota, and graduated from Drake University in Des Moines, Iowa, in 2010 with bachelor's degrees in Writing and Electronic Media and a minor in Jazz Studies. My current role is as Digital Producer for the Minnesota Orchestra, filming concerts and working post-production on our live concert broadcasts.
                 <p> I'm interested in a lot of things, but mostly I'm a jack-of-all-trades, master-of-none. That suits me well enough. I love tinkering with electronics like Raspberry Pi, woodworking, crossword puzzles, cooking, and of course, music. Before the great Covidification of the world in 2020, I played keyboards in about a dozen bands across the Twin Cities Metro, including General B & The Wiz, A Little Too Short To Be Stormtroopers, The 4onthefloor, Radiochurch, The Maytags, and so on. Someday, I'll play in those bands again someday, maybe! Until then, I will introduce to my ride or die companions through all this mess.</p>
                 </p>
              </article>
            </section>
            <section className = "row row-no-gutters">
                <figure className = "col-md-6">
                    <img className="img img thumbnail icon" src={SmokeyCat} alt ="Smokey" />
                <figcaption>
                    <h3>Smokey Robinson</h3>
                    </figcaption>
                    <h4>Stats</h4>
                    <ul>
                        <li>Weight: 14 lbs</li>
                        <li>Color: Grey</li>
                        <li>Volume: loud</li>
                        <li>Acceleration: unknown</li>
                        <li>Hunger: Insatiable</li>
                    </ul>
                </figure>
                <figure className="col-md-6">
                    <img src={StevensCat} alt="Stevens The Cat" />
                    <figcaption>
                    <h3>(Cat) Stevens</h3>
                    </figcaption>
                    <h4>Stats</h4>
                    <ul>
                        <li>Weight: 7 lbs</li>
                        <li>Color: Orange guy</li>
                        <li>Volume: Soft</li>
                        <li>Neurosis: Extreme</li>
                        <li>Hunger: Satiable</li>
                    </ul>
                </figure>
                
            </section>
          </div>
        </div>
      </main>
      </div>
      );
    }
    
      
export default Home;

  
