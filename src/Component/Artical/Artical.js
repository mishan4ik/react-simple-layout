import React from "react";
import "./Artical.css"
import ArticalBox from "./ArticalBox/ArticalBox.js"
import PopularPosts from "./PopularPosts/PopularPosts.js"

let Artical = () => {

    return(

        <div>

            <div className ="Artical__Title">

                    <h1>Recant Artical</h1>

            </div>

            <div className = "block_Artical">

                <div className ="container_left">

                <ArticalBox img = "./img/Artical/img2.jpg"
                firstText = "playing"
                secondText = "Bejami Evlent"
                thirdText = "19 days ago"
                Title = "we are on Maya Bay beach. Thailand"
                text = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"/>
                <ArticalBox img = "./img/Artical/img3.jpg"
                firstText = "playing"
                secondText = "Bejami Evlent"
                thirdText = "21 days ago"
                Title = "trip to black beach in Hawaii. USA"
                text = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"/>

            </div>

            <div className ="artical">

            <div className="container_right">

            <PopularPosts post = "popular post"
            imgPopular = "./img/Artical/img1.jpg"
            imgPost = "./img/Artical/post/img.jpg"
            title = "was with the team on Mount Elbrus. Incredible emotions"
            imgPost1 = "./img/Artical/post/me.jpg"
            title1 = "Was in Egypt. Learned a lot of interesting things"/>


</div>
</div>
            </div>

        </div>

    )



}

export default Artical;