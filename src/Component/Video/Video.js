import React from "react";
import "./Video.css"
import Play from "./Video/Play.js"
import Content from "./Content/Content.js"

let Video = () => {

    return (

        <div>

<div className = "Content__Video">


<Play/>
<Content about = "about me" 
img = "./img/Video/img.jpg" 
title = "Russell .B Sprout" 
text = "s simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s"/>


</div>




        </div>

    )



}

export default Video;
