import React, { useState } from "react";
import {useForm} from 'react-hook-form';
import styled from 'styled-components';

const Form = styled.form`
width: 80%;
height:300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin:10px;
    
    input {
        width: 80%;
        margin-bottom: 5px;
    }

`;


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
    const {register, handleSubmit, formState }=useForm();
    const onValid = (data:any) => {
        console.log(data);

    };
   console.log(formState.errors);


    return(
        <div>
            <Form onSubmit={handleSubmit(onValid)}>
                <input {...register("email",{required:true})} placeholder="Email"/>
                <input {...register("firtstName",{required:true , minLength:{value:10,message:"Your name is too Shot"} })} placeholder="First Name"/>
                <input {...register("lastName",{required:true})} placeholder="Last Name"/>
                <input {...register("username",{required:true})} placeholder="User Name"/>
                <input {...register("password",{required:true})} placeholder="Password"/>
                <input {...register("password1",{required:"password is required"})} placeholder="Passward1"/>
                <button>Add</button>
            </Form>
        </div>
    )
}
export default ToDoList;
