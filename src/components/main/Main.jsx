import React from "react";
import Content from "./Content";
import Buttons from "./Buttons";
import { useState } from 'react';


function Main(){
    const [count, setCount] = useState(0);

    const plus = () => {
        setCount(count + 3);
    };

    const minus = () => {
        if (count > 1) {
            setCount(count - 2);
        }
    };

    const reset = () => {
        setCount(0);
    };
    return(
        <main className="main">
            <Content count={count}/>
            <Buttons plus={plus} minus={minus} reset={reset}/>
        </main>
    )
}


export default Main;