import { getByTitle } from "@testing-library/react";
import React from "react"

let ArticalBox  = (props) => {

   return(

    <div>

<div className ="artical">

<img src={props.img} alt="" />

<div className = "artical_btns">

    <div className ="btn">

            <p>{props.firstText}</p>

    </div>
    <div className ="btn">

            <p>{props.secondText}</p>

    </div>
    <div className ="btn">

            <p>{props.thirdText}</p>

    </div>

</div>

<div className = "title_Text_block">

        <h2>{props.Title}</h2>

</div>
<div className ="text_block">

<p>{props.text}</p>

</div>

</div>

    </div>

   ) 



}
export default ArticalBox;
