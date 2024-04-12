import React from "react";
import { useEffect } from "react";
import "../styles/ListItem.css"

const ListItem = (props) => {

    const handleCheck = () => {
        props.remove(props.description);
    }

    return (
        <div>
            <li>
                <button variant="outline-dark" type="button" onClick={() => props.remove(props.description)}>
                    ☑️
                </button>
                <span className='px-2'> {props.description}</span>
            </li>
        </div>
    );
}

export default ListItem;