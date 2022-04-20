import { IToDo } from "../atoms";
import React from "react";



function ToDo ({text,category,id}:IToDo) {
    const onClick = (event:React.MouseEvent<HTMLButtonElement>)=>{
       const {currentTarget:{name}} = event;
       console.log("I wanna to ",name);
    };

    return (
        <li >
            <span>{text}</span> 
            {category !=="DOING" && <button name="DOING" onClick={onClick} >Doing</button>}
            {category !=="TO_DO" && <button name="TO_DO" onClick={onClick} >To Do</button>}
            {category !=="DONE" && <button name="DONE" onClick={onClick} >Done</button>}
        </li>
    );
}

export default ToDo;