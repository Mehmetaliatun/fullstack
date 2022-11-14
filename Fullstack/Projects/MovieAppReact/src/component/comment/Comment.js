import { Button, Form } from "react-bootstrap";
import "./Comment.css";

const Comment = () => {
  return (
    <div className="comment">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="commandTitle">
            You can write comment about film
          </Form.Label>
          <Form.Control className="textField" as="textarea" rows={5} />
        </Form.Group>
        <Button className="submitButton">Submit</Button>
      </Form>
    </div>
  );
};

export default Comment;
