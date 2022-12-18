import React from "react"

let RightSideNews = (props) => {
    
    return(

        <div>

                            
                                    <div className="block_right_side_news">

                                            <div className="img_news">

                                                    <img src={props.imgRightSideNews} alt="" />

                                            </div>
                                            <div className="content_news">

                                                    <p>{props.textNews}</p>

                                            </div>

                                    </div>

        </div>

    )



}
export default RightSideNews;
