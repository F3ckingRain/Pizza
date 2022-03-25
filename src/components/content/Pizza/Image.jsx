import React from "react";

const Image = (props) => {

    return (
        <img
            className="pizza-block__image"
            src={props.src}
            alt="Pizza"
        />
    )
}

export default Image