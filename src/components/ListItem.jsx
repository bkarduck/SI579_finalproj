import React from "react";
import { useEffect } from "react";
import "../styles/ListItem.css"

const ListItem = (props) => {

    const handleCheck = () => {
        props.remove(props.task);
    }

    return (
        <div>
            <li>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={handleCheck} />
                <label class="form-check-label" for="flexCheckDefault">
                    {props.description}
                </label>
            </li>
        </div>
    )
}

export default ListItem;