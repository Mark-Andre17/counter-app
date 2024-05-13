import React from "react";


function Content(props){
    return(
        <div className="counter">
            <h1>{props.count}</h1>
        </div>
    )
}


export default Content;