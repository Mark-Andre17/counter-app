import React from "react";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";

function Header(){
    const items = ['Главная', 'О нас', 'Контакты'];
    return (
        <header className="header">
            <div className="header-top">
                <Logo />
                <HeaderMenu items={items}/>
            </div>
        </header>
    )
}

export default Header;