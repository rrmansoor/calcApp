import React from "react";
import "./key.css";

function Key(props) {
    return (
        <button className={'${props.className'}
            onClick={() => props.onClick(props.value)}>
            {props.value}{""}
        </button>
    );
}

export default Key;
