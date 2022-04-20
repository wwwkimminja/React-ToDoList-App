import styled from 'styled-components';
import { useRecoilValue} from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 10px;
`



function ToDoList(){
    const toDos= useRecoilValue(toDoState);

    return(
        <Container>
            <h1>To Dos</h1>
            <CreateToDo/>
            <ul>
                {toDos.map(toDo =><ToDo key={toDo.id}{...toDo}/> )}
            </ul>
        </Container>
    )
}
 
export default ToDoList;
