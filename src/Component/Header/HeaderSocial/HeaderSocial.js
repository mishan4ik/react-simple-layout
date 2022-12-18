import React from "react"

let HeaderSocial = () => {

    let social = ["./img/header/facebook.png","./img/header/google.png", "./img/header/instagram.png","./img/header/twitter.png" ];


    let massSocial = social.map((list) => <div> <img src={list} alt="" /></div>)


    return(

        <div>

                    <div className = "block__social">
                    
                    {massSocial}

                </div>


        </div>

    )



}
export default HeaderSocial;