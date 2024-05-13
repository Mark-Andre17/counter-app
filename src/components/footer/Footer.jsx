import React from "react";
import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";

function Footer(){
    const footerMenu = ['Партнерам', 'Разработчикам', 'Вакансии']
    return(
        <footer className="footer">
            <div className="footer-wrapper">
                <FooterLogo/>
                <FooterMenu footerMenu={footerMenu}/>
                <p>“Lincode”, 2023г</p>
            </div>
        </footer>
    )
}


export default Footer;