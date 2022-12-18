import React from "react";

let AboutContent = (props) => {

    return(

        <div>



<div className = "AboutContent">

<div className ="block_aboutme">

    <p>{props.me}</p>

</div>
<div className ="title_About_Block">
<h2>{props.titleMe}</h2>
</div>
<div className ="textAbout_block">
<p className = "Content_text">{props.textMe}</p>
</div>
<div className ="block__btn">
        <button>{props.AboutBtn}</button>
</div>

</div>

        </div>



    )



}
export default AboutContent;
