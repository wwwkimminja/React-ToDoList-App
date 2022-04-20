import React from "react";
import {useForm} from 'react-hook-form';
import styled from 'styled-components';

const Form = styled.form`
width: 80%;
height:300px;
    display: flex;
    flex-direction: column;
    align-items: center;
   
    margin:10px;
    padding :0;

    
    input{
    
       width: 90%;
       margin-top: 5px;
    }
    button {
        width:93%;
        margin-top: 15px;
    }
    span{
        margin-left: 10px;
        align-self: flex-start;
        color:red;
        font-size: 0.5rem;
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

interface IForm {
    email: string;
    firtstName: string;
    lastName: string;
    username: string;
    password: string;
    password1: string;
    extraError?:string;
}
function ToDoList(){
    const {register, handleSubmit, formState:{errors} ,setError}=useForm<IForm>({
        defaultValues:{
            email:"@gmail.com",
        },

    });
    const onValid = (data:IForm) => {
        if(data.password !== data.password1){
            setError("password1",{message:"Password are not the same!!"},{shouldFocus:true})
        }
        setError("extraError",{message:"Server offline"});

    }    
    return(
        <div>
            <Form onSubmit={handleSubmit(onValid)}>
                <input {...register("email",
                {required:"Email Required",
              
                pattern:{value:/^[A-Za-z0-9._%+-]+@gmail.com$/,
                message:"Only gmail.com emails allowed"},})} placeholder="Email"/>
                <span>{errors?.email?.message}</span>
                <input {...register("firtstName",{required:"first name is required" , minLength:{value:10,message:"Your name is too Shot"} })} placeholder="First Name"/>
                <span>{errors?.firtstName?.message}</span>
                <input {...register("lastName",{
                    required:"last name is required",
                    validate:{
                        noNico:(value) => value.includes("nico")? "no nico allowed ":true,
                        noNick:(value) => value.includes('nick')?"no nick allowed":true,}})} placeholder="Last Name"/>
                <span>{errors?.lastName?.message}</span>
                <input {...register("username",{required:"username is required"})} placeholder="User Name"/>
                <span>{errors?.username?.message}</span>
                <input {...register("password",{required:"password is required"})} placeholder="Password"/>
                <span>{errors?.password?.message}</span>
                <input {...register("password1",{required:"password1 is required"})} placeholder="Passward1"/>
                <span>{errors?.password1?.message}</span>
                <button>Add</button>
                <span>{errors?.extraError?.message}</span>
            </Form>
        </div>
    )
}

export default ToDoList;
