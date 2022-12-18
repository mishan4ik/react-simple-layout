import React from "react";
import "./Header.css";
import Date from "./Date/Date.js"
import Logo from "./Logo/Logo.js"
import HeaderSocial from "./HeaderSocial/HeaderSocial.js"

let Header = () => {

    return (

        <div>

            <div className = "block__Header">

               <Date dateImg = "./img/header/date.png" dateInfo = "Sunday , Dec, 29, 22"/>
                <Logo logo ="./img/header/logo.png"/>
                <HeaderSocial/>

            </div>

        </div>

    )


}

export default Header ;