import { Button, TomatoButton } from "./components/Button.styled";
import Container from "./components/Container.styled";
import HeaderText from "./components/HeaderText.styled";
import StyledLink from "./components/Link.styled";

const App = () => {
  return (
    <>
      <Container bg="gray">
        <HeaderText color="hotpink">Styled Component</HeaderText>
        <Button primary>Save</Button>
        <Button>Clear</Button>
        <TomatoButton primary>Submit</TomatoButton>
        <TomatoButton>Send</TomatoButton>
      </Container>
      <Container bg="#eee">
        <StyledLink href="https://www.google.com.tr" target="_blank">
          Google
        </StyledLink>
        <StyledLink secondary href="https://www.reactjs.org/" target="_blank">
          React
        </StyledLink>
      </Container>
    </>
  );
};

export default App;
