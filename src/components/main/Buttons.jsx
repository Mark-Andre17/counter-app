import React from "react";


function Buttons(props){
    return(
        <div className="buttons">
            <button className="btn-plus" onClick={props.plus}>Увеличить</button>
            <button className="btn-minus" onClick={props.minus}>Уменьшить</button>
            <button className="btn-reset" onClick={props.reset}>Сброс</button>
        </div>
    )
}


export default Buttons;
