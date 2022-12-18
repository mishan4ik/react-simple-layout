import React from "react";
import "./Aboutme.css"
import AboutImg from "./AboutImg/AboutImg.js"
import AboutContent from "./AboutContent/AboutContent.js"

let About = () => {

    
    return(


        <div>

        <div className ="AboutMe">


                <AboutImg img = "./img/AboutMe/me.jpg"/>

                <AboutContent me = "About me" titleMe = 'founder of tourism, lover of hiking with a team' 
                textMe = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown   printer took a galley of type and scrambled it to make a type specimen book."   
                AboutBtn = "more about me"/>

        </div>

    </div>


    )

}

export default About;