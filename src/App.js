import "./App.css";
import Home from "./pages/Home";
import styled from 'styled-components';

const Main = styled.main`
  background-color: #111;
`;

function App() {
  return (
    <Main className="App">
      <Home />
    </Main>
  );
}

export default App;
