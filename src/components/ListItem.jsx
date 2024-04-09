import React from "react";
import "../styles/ListItem.css"
const ListItem = (props) => {
    return (
        <div>
            <li>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        {props.description}
                    </label>
            </li>
        </div>
    )
}

export default ListItem;