import styled from "@emotion/styled";
import { Header } from "components/Header";
import { BlogPost } from "components/BlogPost";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eeeeee;
  overflow: scroll;
`;


function App() {
  return (
    <Container>
      <Header/>
      <BlogPost/>
    </Container>
  );
}

export default App;
