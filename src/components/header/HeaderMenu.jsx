import React from "react";


function HeaderMenu(props){
    return(
        <nav className="header-nav">
            <ul>
            {props.items.map((item, index) => (
                    <li key={index}>
                        <a href='#' key={index}>{item}</a>
                    </li>
                )
            )}
            </ul>
        </nav>
    )
}


export default HeaderMenu;