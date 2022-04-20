import styled from 'styled-components';
import { useRecoilValue} from "recoil";
import { toDoSelector, toDoState } from "../atoms";
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 10px;
`



function ToDoList(){
    //const toDos= useRecoilValue(toDoState);
    const [toDo,doing,done] = useRecoilValue(toDoSelector);
    //console.log(selectorOutput);

    return(
        <Container>
            <h1>To Dos</h1>
            <CreateToDo/>
            <h2>To Do</h2>
            <hr />
            <ul>
                {toDo.map(toDo =><ToDo key={toDo.id}{...toDo}/> )}
            </ul>
            <h2>Doing</h2>
            <hr/>
            <ul>
                {doing.map(toDo =><ToDo key={toDo.id}{...toDo}/> )}
            </ul>
            <h2>Done</h2>
            <hr/> 
            <ul>
                {done.map(toDo =><ToDo key={toDo.id}{...toDo}/> )}
            </ul>
        </Container>
    )
}
 
export default ToDoList;
