import React from "react";
import main from "../main.css";

const Film = ({name, url}) => {
  
    return (
        <div class="wrapper" >
        {/* <p>I'm a Film</p> */}
        <ul>
           <li>
        <a href={url}>{name}</a>
        </li> </ul></div>
    )
}

export default Film;