import React from "react";

let PopularPosts = (props) => {

    return(

        <div>

<div className ="title_name_post">

<h2>{props.post}</h2>

</div>

<div className = "popular__img">
<img  src={props.imgPopular} alt="" />
</div>

<div className = "posts">

<div className ="img_post">

<img src={props.imgPost} alt="" />

</div>
<div className ="content_posts">

<h5>{props.title}</h5>

</div>
</div>
<div className = "posts">

<div className ="img_post">

<img src={props.imgPost1} alt="" />

</div>
<div className ="content_posts">

<h5>{props.title1}</h5>

</div>
</div>

        </div>

    )



}
export default PopularPosts;
