import React, { useState } from "react";
import {useForm} from 'react-hook-form';



/*
function ToDoList(){
     const [toDo,setTodo]= useState("");

    const onChange = (event:React.FormEvent<HTMLInputElement>)=>{
        const {currentTarget:{value},}=event;
        setTodo(value);
    }

    const onSubmit =(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        
    }
  return (
      <div>
          <form onSubmit={onSubmit}>
              <input onChange={onChange} value={toDo} placeholder="WriteHere"></input>
              <button>Add</button>
          </form>
      </div>
  )
}
 */
function ToDoList(){
    const {register,watch}=useForm();
    console.log(watch());


    return(
        <div>
            <form>
                <input {...register("email")} placeholder="Email"/>
                <input {...register("firtstName")} placeholder="First Name"/>
                <input {...register("lastName")} placeholder="Last Name"/>
                <input {...register("username")} placeholder="User Name"/>
                <input {...register("password")} placeholder="Password"/>
                <input {...register("password1")} placeholder="Passward1"/>
                <button>Add</button>
            </form>
        </div>
    )
}
export default ToDoList;
