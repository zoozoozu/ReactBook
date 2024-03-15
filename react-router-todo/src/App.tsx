import styled from '@emotion/styled';
import { Routes, Route } from 'react-router-dom';
import { DataView } from 'pages/DataView';
import { ToDoListContextProvider } from 'contexts/ToDoList';
import { ToDoInput } from 'pages/ToDoInput';
import { Header } from 'components/Header';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  background-color: #eeeeee;
`;


const NotFound = styled.div`
  text-align: center;
`

interface ToDoListDto {
  key?:number;
  label:string;
}

function App() {
  
  return (
    <Container>
      <ToDoListContextProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<DataView />} />
          <Route path="/add" element={<ToDoInput />} />
          <Route path="*"
                 element={
                  <NotFound>
                    404
                    <br/>
                    NOT FOUND
                  </NotFound>
                 }
            />
        </Routes>
      </ToDoListContextProvider>
    </Container>
  );
}

export default App;

