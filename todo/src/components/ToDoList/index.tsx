import styled from '@emotion/styled';
import { ToDoItem } from 'components/ToDoItem';
import { ToDoListContext } from 'contexts/ToDoList';
import { useContext } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export interface ToDoListDto {
  key?: number;
  label: string;
}

interface Props {
  toDoList: ReadonlyArray<ToDoListDto>;
  onDelete?: (todo: number) => void;
}

export const ToDoList = () => {
  const { toDoList, onDelete } = useContext(ToDoListContext);

  return (
    <Container>
      {toDoList.map((todo) => (
        <ToDoItem
          key={todo.key}
          label={todo.label}
          onDelete={() => {
            if (typeof onDelete === 'function') onDelete(todo);
          }}
        />
      ))}
    </Container>
  );
};
