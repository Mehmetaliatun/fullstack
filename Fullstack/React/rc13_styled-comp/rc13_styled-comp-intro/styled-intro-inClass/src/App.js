import { Button, TomatoButton } from "./components/Button.styled";
import Container from "./components/Container.styled";

const App = () => {
  return (
    <>
      <Container bg="gray">
        <Button primary>Save</Button>
        <Button>Clear</Button>
        <TomatoButton primary>Submit</TomatoButton>
        <TomatoButton>Send</TomatoButton>
      </Container>
    </>
  );
};

export default App;
