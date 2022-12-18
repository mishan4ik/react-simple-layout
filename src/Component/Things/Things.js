import React from "react"
import "./Things.css";
import LeftSideThings from "./LeftSideThings/LeftSideThings.js"
import RightSideThings from "./RightSideThings/RightSideThings"


let Things = () => {

    return(

        <div>

            <div className ="Things_block">

                <div className="container">

                <div className="container_left_Things">

                    <div className="Things_left_side">

                        <LeftSideThings img = "./img/Things/img.jpg"
                        title = "enjoy the beautiful days"/>


                    </div>


                </div>
                <div className="container_right_Things">

                <div className="title__Categories">
                            <h2>categories</h2>
                        </div>


                        <RightSideThings name = "Bussiness Treveller"
                        number = "(06)" />
                        <RightSideThings name = "Extreame Work"
                        number = "(12)" />
                        <RightSideThings name = "Wev Devolapment"
                        number = "(09)" />
                        <RightSideThings name = "My Ride"
                        number = "(31)" />


                </div>

                </div>
            </div>

        </div>

    )



}
export default Things;