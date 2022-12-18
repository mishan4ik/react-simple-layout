import React from "react"

let LeftBlockNews = (props) => {

    return(

        <div>

<div className="left_side_news">

<div className="block_img_news">

    <img src={props.imgNews} alt="" />

</div>
<div className="info_news_block">

        <div className="info_news">

            <p>{props.info}</p>

        </div>
        <div className="info_news">

                <p>{props.info1}</p>

        </div>
        <div className="info_news">

                <p>{props.datenews}</p>

        </div>

        <div className="info_news">

                <p>{props.views}</p>

        </div>
        

</div>
<div className="title_block_news">

    <h2>{props.title}</h2>

</div>
<div className="text_block_news">

    <p>{props.text} </p>

</div>

</div>

        </div>

    )


}
export default LeftBlockNews;