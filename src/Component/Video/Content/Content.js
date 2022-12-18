import React from "react";

let Content = (props) => {

    return(

        <div>

<div className ="Video__About">

<h2>{props.about}</h2>

<div className="block_Me">

        <img src={props.img} alt="" />
        <h2>{props.title}</h2>
        <p>{props.text}</p>

</div>

</div>

        </div>

    )



}
export default Content;

