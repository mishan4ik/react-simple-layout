import React from "react";
import "./Trands.css"
import {useState} from "react";

let Trands = () => {

 let[value,setValue] =useState(0)
 
 let LeftArrow = () => {

    setValue(value = value + 1520);
    console.log(value)
    if(value == 1520){
        setValue(value = value + -3040 );
    }

 }
 let RightArrow = () => {

    setValue(value = value - 1520);
    if(value == -3040){
        setValue(value = value - -3040 );
    }

 }


    return(

        <div>

            <div className ="Trands__block">

                    <h1>news & trands</h1>
            </div>
            <div className ="Slider__box__Trands">
                    <div className = "Slider__Trands">
                    

                    <div style = {{transform:`translateX(${value}px)`}} className ="slider">
                                <div className = "block_trands">
                                <img src="./img/Trands/img1.jpg" alt="" />
                                <a href="trand1">this trend is going to be wild.</a>
                                </div>
                                <div className = "block_trands">
                                <img src="./img/Trands/img2.jpg" alt="" />
                                <a href="trand2">Wellness trips</a>
                                </div>
                                <div className = "block_trands">
                                <img src="./img/Trands/img3.jpg" alt="" />
                                <a href="trand3">Glamping</a>
                                </div>
                                <div className = "block_trands">
                                <img src="./img/Trands/img4.jpg" alt="" />
                                <a href="trand4">Caring for the environment</a>
                                </div>
                                <div className = "block_trands">
                                <img src="./img/Trands/img5.jpeg" alt="" />
                                <a href="trand5">autonomous travel</a>
                                </div>
                                <div className = "block_trands">
                                <img src="./img/Trands/img6.jpg" alt="" />
                                <a href="trand6">Wishlist trips</a>
                                </div>


                    </div>



                    <div className = "Trads__arrows">

<div onClick={LeftArrow} className = "Trands__leftArrow">

    <img src="./img/Trands/arrows/arrowLeft.png" alt="" />

</div>
<div onClick={RightArrow} className = "Trands__RightArrow">

    <img src="./img/Trands/arrows/arrowRight.png" alt="" />

</div>
                    </div>
            </div>
            </div>
        </div>

    )



}

export default Trands;