import React from "react";
import {useForm} from 'react-hook-form';
import styled from 'styled-components';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 10px;
`
const Form = styled.form`
width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
   
    input {
        width: 80%;
    }
    button {
        width: 20%;
        margin:10px;
    }
   
    li{
       margin:10px;
    }
`;

interface IToDo {
    text:string;
    id: number,
    category:"TO_DO"| "DOING" | "DONE";
}
const toDoState = atom<IToDo[]>({
    key:"toDo",
    default:[],

})


interface IForm {
    toDo:string;
 
 
}
function ToDoList(){
    const [toDos,setToDos]= useRecoilState(toDoState);
    //const value = useRecoilValue(toDoState);
    //const modFn = useSetRecoilState(toDoState);
   const { register, handleSubmit,setValue} = useForm<IForm>();
   const handleValid=({toDo}:IForm)=>{
       setToDos(oldToDos => [{text:toDo,id:Date.now(),category:"TO_DO"},...oldToDos])
       setValue("toDo","")
   }
   console.log(toDos);


    return(
        <Container>
            <h1>To Dos</h1>
            
            <Form onSubmit={handleSubmit(handleValid)}>
                <input {...register("toDo",{
                    required:"Please Write a To Do"
                })} placeholder="Please Write a To Do"/>
                <button>Add</button>
            </Form>
            <ul>
                {toDos.map(toDo =><li key={toDo.id}>{toDo.text}</li>)}
            </ul>
        </Container>
    )
}

export default ToDoList;
