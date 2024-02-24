import { useEffect, useState } from 'react';
import styled from '@emotion/styled'
import { DataView } from 'components/DataView';
import axios from 'axios';


const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

const TextInput = styled.input`
  font-size: 1.2rem;
  padding: 8px;
`;

interface ToDoListDto {
  key?:number;
  label:string;
}

function App() {
  
  const [toDoList, setToDoList] = useState<ToDoListDto[]>([]);
  const [toDo, setToDo] = useState('');

  useEffect(()=>{
    axios.get("http://localhost:8080/api/todo")
    .then((response)=> {
      setToDoList(response.data);
    })
  })

  const onDelete = (todo: ToDoListDto) => {
    setToDoList(toDoList.filter((item) => item.key !== todo.key));
  }

  return (
    <Container>
      <DataView toDoList = {toDoList} onDelete={onDelete}/>
      <TextInput
        value = {toDo}
        onChange={(event) => setToDo(event.target.value)}
      />
    </Container>
  );
}

export default App;

