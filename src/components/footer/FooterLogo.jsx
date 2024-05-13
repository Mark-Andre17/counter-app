import React from "react";
import footerlogo from "../../assets/footerLogo.svg";


function FooterLogo(){
    return(
        <div className="footer-logo">
            <img src={footerlogo} alt="logo" />
        </div>
    )
}


export default FooterLogo;