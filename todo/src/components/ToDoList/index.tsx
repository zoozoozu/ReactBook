import styled from '@emotion/styled'
import { ToDoItem } from 'components/ToDoItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export interface ToDoListDto {
    key?:number;
    label:string;
}

interface Props {
    toDoList: ReadonlyArray<ToDoListDto>;
    onDelete?: (todo: ToDoListDto) => void;
}

export const ToDoList = ({ toDoList, onDelete}: Props) => {
    return (
        <Container>
            {toDoList.map((todo) => (
                <ToDoItem 
                    key = {todo.key}
                    label={todo.label}
                    onDelete={() => {
                        if(typeof onDelete === 'function') onDelete(todo);
                    }}
                    />
            ))}
        </Container>
    )
}

