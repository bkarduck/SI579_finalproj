import React from "react";
import { useEffect } from "react";
import "../styles/ListItem.css"

const ListItem = (props) => {

    const handleCheck = () => {
        props.remove(props.description);
    }

    return (
        <div>
            {/* <li>
                <input class="form-check-input" type="button" value="" id="flexCheckDefault" onChange={() => handleCheck} />
                <label class="form-check-label" for="flexCheckDefault">
                    {props.description}
                </label>
            </li> */}


            <li> 
            {/* outline-dark
            variant="primary" className="w-100 fs-5 mb-2"
            className='btn btn-sm btn-danger done' */}
            <button variant="outline-dark" type="button" onClick={() => props.remove(props.description)}>
                     ☑️
                    </button>
            <span className='px-2'> {props.description}</span>
           
          
                    
            </li>
       
        </div>
    )
}

export default ListItem;