import React from "react"

let Menu = () => {

    let menu = ["letest news","business","life & style","blog","briefs","cricket","citys"];

    let menuMass = menu.map((list) => <li>{list}</li>)


return(

    <div>
<ul>            
    

                {menuMass}
               
           </ul>

    </div>

)



}
export default Menu;