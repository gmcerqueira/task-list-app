/* eslint-disable react/prop-types */
import { useContext, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { UserContext } from '../context/UserProvider';
import { TaskContext } from '../context/TaskProvider';
import '../styles/NewTask.css';

const NewTask = ({ setModalShow }) => {
  const { sendTask, handleNewTaskChange, Sending } = useContext(TaskContext);
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
      <Button
        variant="primary"
        ref={ref}
        onClick={() => { sendTask(Token); setModalShow(false); }}
        disabled={Sending}
      >
        Submit
      </Button>
    </Form>
  );
};

export default NewTask;
