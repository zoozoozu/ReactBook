import { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "components/Button";
import axios from "axios";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  postion: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0 0 0 / 75%);
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

const InputGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.div`
  font-size: 1.2rem;
`;

const Input = styled.input`
  font-size: 1.2rem;
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

interface Props {
    readonly onClose?: () => void;
}

export const Form = ({ onClose }: Props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const registerPost = () => {
    if(title === '' || body === '') return;
    
    axios('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      data: {
        userId: 1,
        title,
        body,
      },
    })
      .then((response) => {
        console.log(response);
        if(typeof onClose === 'function') onClose();
      })
      .catch((error)=> {
        console.error(error);
      });
  }
    return (
      <Container>
        <Background />
        <Contents>
          <Title>블로그 글 등록</Title>
          <InputGroup>
            <Label>제목: </Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)}/>
          </InputGroup>
          <InputGroup>
            <Label>내용: </Label>
            <Input value={body} onChange={(e) => setBody(e.target.value)}/>
          </InputGroup>
          <Actions>
            <Button label="등록하기" color="green" onClick={registerPost}/>
            <Button label="닫기" color="#304FFE" onClick={onClose} />
          </Actions>
        </Contents>
      </Container>
    )
}