import { useContext, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { UserContext } from '../context/UserProvider';
import { TaskContext } from '../context/TaskProvider';
import '../styles/NewTask.css';

const NewTask = () => {
  const { sendTask, handleNewTaskChange, Sent } = useContext(TaskContext);
  const { Token } = useContext(UserContext);

  const ref = useRef(null);
  return (
    <Form>
      <Form.FloatingLabel
        controlId="newTask"
        label="New task..."
        className="mb-3"
      >
        <Form.Control
          as="textarea"
          rows="60"
          cols="30"
          placeholder="Leave a comment here"
          onChange={handleNewTaskChange}
        />
      </Form.FloatingLabel>
      <Button variant="primary" ref={ref} onClick={() => sendTask(Token)}>
        Submit
      </Button>
      <Overlay target={ref.current} show={Sent} placement="right">
        {(props) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Tooltip id="overlay-example" {...props}>
            Task sent!
          </Tooltip>
        )}
      </Overlay>
    </Form>
  );
};

export default NewTask;
