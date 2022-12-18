import React from "react";

let HeaderSearch = (props) => {

return(

    <div>

<div className = "headerSearch">

<div className ="blockSearch">

        <img src={props.search} alt="" />

</div>

<input type={props.text} />

</div>

    </div>

)



}
export default HeaderSearch;
