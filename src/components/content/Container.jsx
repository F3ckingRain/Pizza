import React from "react";
import Top from "./Top";
import Items from "./Items";

const Container = (props) => {
    return (
        <div className="container">
            <Top/>
            <h2 className="content__title">{props.title}</h2>
            <Items/>
        </div>
    )
}

export default Container