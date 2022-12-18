import React from "react"

let Date = (props) => {

return (

    <div>

                    <div className = "block__date">
                    <div>
                    <img src={props.dateImg} alt="" />
                    </div>
                    <p>{props.dateInfo}</p>

                </div>

    </div>

)    



}
export default Date;

