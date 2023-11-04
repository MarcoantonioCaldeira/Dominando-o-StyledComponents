import { StyledButton, Button2 } from "./components/Button.styled";
import { Wrapper } from "./components/Wrapper.styled";

function App() {
  return (
    <div className="App">    
        <Wrapper>
          <h1>Styled Components Tutorial</h1>
       
          <StyledButton>Olha que magico</StyledButton>
          <StyledButton backgroundColor="blue">Olha que magico</StyledButton>
          <Button2>Olha que magico</Button2>
          <StyledButton>Olha que magico</StyledButton>

        </Wrapper>
    </div>
  );
}

export default App;
