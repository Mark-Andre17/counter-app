import React from "react";


function FooterMenu(props){
    return(
        <div className="footer-menu">
            <ul>
                {props.footerMenu.map((item,index) => (
                    <li key={index}>
                        <a href='#' key={index}>{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default FooterMenu;