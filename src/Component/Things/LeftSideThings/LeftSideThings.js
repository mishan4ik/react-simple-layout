import React from "react"

let LeftSideThings = (props) => {

    return(

        <div>

            <div className="Things_img">

                <img src={props.img} alt="" />

            </div>
            <div className="Things_content">

                <h2>{props.title}</h2>

                </div>


        </div>

    )



}
export default LeftSideThings;
