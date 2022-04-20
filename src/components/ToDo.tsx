import { IToDo } from "../atoms";
import React from "react";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";



function ToDo ({text,category,id}:IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    // const onClick = (event:React.MouseEvent<HTMLButtonElement>)=>{
    //    const {currentTarget:{name}} = event;
    //    setToDos((oldToDos) => {
    //        const targetIndex = oldToDos.findIndex(toDo => toDo.id ===id)
    //        const oldToDo = oldToDos[targetIndex];
    //        const newToDo ={text,id,category:name as any}; *** any 사용하지 않도록****


    //        return [...oldToDos.slice(0,targetIndex),newToDo,...oldToDos.slice(targetIndex+1)];
    //    })
    // };
    const onClick =(newCategory:IToDo["category"])=>{
        setToDos((oldToDos)=>{
            const targetIndex = oldToDos.findIndex(toDo => toDo.id ===id)
                  const oldToDo = oldToDos[targetIndex];
                  const newToDo ={text,id,category:newCategory};
                  return [...oldToDos.slice(0,targetIndex),newToDo,...oldToDos.slice(targetIndex+1)];
        })
    };

    return (
        <li >
            <span>{text}</span> 
            {category !=="DOING" && <button  onClick={()=>onClick("DOING")} >Doing</button>}
            {category !=="TO_DO" && <button  onClick={()=>onClick("TO_DO")} >To Do</button>}
            {category !=="DONE" && <button onClick={()=>onClick("DONE")} >Done</button>}
        </li>
    );
}

export default ToDo;