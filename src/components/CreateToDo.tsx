import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import {toDoState} from '../atoms';

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


interface IForm {
    toDo:string;
}
function CreateToDo(){
    const setToDos = useSetRecoilState(toDoState);
    const {register,handleSubmit,setValue} = useForm<IForm>();
    const handleValid=({toDo}:IForm)=>{
        setToDos(oldToDos => [{text:toDo,id:Date.now(),category:"TO_DO"},...oldToDos])
        setValue("toDo","")
    }

    return (
        <Form onSubmit={handleSubmit(handleValid)}>
                <input {...register("toDo",{
                    required:"Please Write a To Do"
                })} placeholder="Please Write a To Do"/>
                <button>Add</button>
            </Form>
    );
}

export default CreateToDo;