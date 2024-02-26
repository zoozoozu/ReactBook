import { useEffect, useState } from 'react';
import styled from '@emotion/styled'
import { DataView } from 'components/DataView';
import axios from 'axios';
import {getData} from 'api/index'


const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;npm 
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
  const [toDo, setToDo] = useState<string>();

  const getToDoList = async () => {
    try{
      const response = await axios.get('http://localhost:8080/api/todo')
      return response;
    } catch(error){
      console.log(error)
      throw new Error('Failed to get user')
    }
  }


  // 한번만 출력되게 만들래!
  useEffect(() => {
    // 마운트 하지 않아도 실행 하는 소스
    getToDoList().then((todo)=> {
      setToDoList(todo.data);
      console.log(todo.data);
    })
    .catch((err)=>{
      console.log(err);
    })  
  }, []);

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

