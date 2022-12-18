import React from "react"

let RightSideThings = (props) => {

    return(

        <div>

                        <div className="table_category">

                            <div className="name_category">
                                <p>{props.name}</p>
                            </div>
                            <div className="number_category">
                                <p>{props.number}</p>
                            </div>

                        </div>

        </div>

    )



}
export default RightSideThings;

