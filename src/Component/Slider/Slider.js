import React from "react";
import "./Slider.css"
import {useState} from "react"

let Slider = () => {

let[value,setValue] = useState(0);      


let LeftArrow = () => {

    setValue(value = value + 700);
    if(value == 700){
        setValue(value = value + -2100 );
    }


}

let RightArrow = () => {

    setValue(value = value - 700);
    console.log(value)
    if(value == -2100){
        setValue(value = value  - - 2100)
    }


}
  
    

return (

    <div>

<div classNaame = "Slider">


        <div  className = "Slider__box">
                
                <div style={{transform: `translateX(${value}px)`}}  className = "slide">
                    <div className = "slide_slide">
                    <div className = "sliderImg">
                    <img src="./img/slider/slide1.jpg" alt="" />
                    </div>
                    <div className = "slideText">
                    <a href="they must promise to provide" className = "first">they should be happy</a>
                    </div>
                    </div>   
                </div>
                <div style={{transform: `translateX(${value}px)`}} className = "slide">
                <div className = "slide_slide">
                <div className = "sliderImg">
                    <img  src="./img/slider/slide2.jpg" alt="" />
                    </div>
                    <div className = "slideText">
                    <a href="they must promise to provide" className = "second">they should be happy</a>
                    </div>
                    </div>
                </div>
                <div style={{transform: `translateX(${value}px)`}} className = "slide">
                <div className = "slide_slide">
                    <div className = "sliderImg">
                    <img  src="./img/slider/slide3.jpg" alt="" />
                    </div>
                    <div className = "slideText">
                    <a href="they must promise to provide" className = "third">they should be happy</a>
                    </div>
                    </div>
                </div>
                <div className = "arrow_box">

<div onClick={LeftArrow} className = "arrow_Left">
            <img src="./img/slider/arrow/arrowLeft.png" alt="" />
        </div>
        <div onClick={RightArrow} className = "arrow_Right">
            <img src="./img/slider/arrow/arrowRight.png" alt="" />
        </div>

</div>
                
                
        </div>
        
        </div>
    </div>

)


}
export default Slider;