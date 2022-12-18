import React from "react";
import "./Downheader.css"
import DownBurgerBtn from "./DownBurgerBtn/DownBurgerBtn.js"
import Menu from "./Menu/Menu.js"
import HeaderSearch from "./HeaderSearch/HeaderSearch.js"

let DownHeader = () =>{

return(

<div>

    <div className = "ContentdownHeader">

    <DownBurgerBtn burger = "./img/downheader/burger.png"/>

<div className = "headerMenu">

     <Menu/>

</div>

    <HeaderSearch search = "./img/downheader/search.png" text = "text"/>

</div>

</div>




)

    


}

export default DownHeader;