import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export interface ToDoListDto {
  key?: number;
  label: string;
}

interface Context {
  readonly toDoList: ToDoListDto[];
  readonly onAdd: (todo: string) => void;
  readonly onDelete: (todo: ToDoListDto) => void;
}

const ToDoListContext = createContext<Context>({
  toDoList: [],
  /* eslint-disable @typescript-eslint/no-empty-function */
  onAdd: (): void => {},
  onDelete: (): void => {},
  /* eslint-disable @typescript-eslint/no-empty-function */
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ToDoListContextProvider = ({ children }: Props) => {
  const [toDoList, setToDoList] = useState<ToDoListDto[]>([]);
  const [showToDoInput, setShowToDoInput] = useState(false);
  const [toDo, setToDo] = useState('');

  const getToDoList = async () => {
    try{
      const response = await axios.get('http://localhost:8080/api/todo')
      return response;
    } catch(error){
      console.log(error)
      throw new Error('Failed to get todoList')
    }
  }

  const DeleteToDoList = async() => {
    try{
      const response = await axios.post('http://localhost:8080/api/delete')
      return response;
    } catch(error){
      console.log(error)
      throw new Error('Failed delete')
    }
  } 

  useEffect(() => {
    getToDoList().then((todo)=> {
      setToDoList(todo.data);
      console.log(todo.data);
    })
    .catch((err)=>{
      console.log(err);
    })  
  }, []);

  const onDelete = (todo: ToDoListDto) => {
    //delete
    axios.post('http://localhost:8080/api/delete',todo);
    getToDoList().then((todo)=> {
        setToDoList(todo.data);
        console.log(todo.data);
      })
    //setToDoList(toDoList.filter((item) => item.key !== todo));
  };

  const onAdd = (toDo: string) => {
    console.log("saveTodo: ", toDo);
    axios.post('http://localhost:8080/api/save',{label: toDo});
    //setToDoList([...toDoList, {label: toDo}]);
    setShowToDoInput(false);
    getToDoList().then((todo)=> {
        setToDoList(todo.data);
        console.log(todo.data);
      })
  };

  return (
    <ToDoListContext.Provider
      value={{
        toDoList,
        onAdd,
        onDelete,
      }}>
      {children}
    </ToDoListContext.Provider>
  );
};

export { ToDoListContext, ToDoListContextProvider};
