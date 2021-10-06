import PropTypes from 'prop-types';

import { useContext, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { UserContext } from '../context/UserProvider';
import { TaskContext } from '../context/TaskProvider';
import '../styles/NewTask.css';

const EditTask = ({ id, setModalShow }) => {
  const { findTask, editTask } = useContext(TaskContext);
  const { Token } = useContext(UserContext);

  const ref = useRef(null);
  const [TaskText, setTaskText] = useState(findTask(id));

  return (
    TaskText && (
      <Form>
        <Form.Control
          id="editTask"
          as="textarea"
          placeholder="Leave a comment here"
          rows="10"
          cols="10"
          value={TaskText}
          onChange={({ target }) => setTaskText(target.value)}
        />
        <Button
          variant="primary"
          ref={ref}
          onClick={() => {
            editTask(id, TaskText, Token);
            setModalShow(false);
          }}
        >
          Submit
        </Button>
      </Form>
    )
  );
};

EditTask.propTypes = {
  id: PropTypes.string.isRequired,
  setModalShow: PropTypes.func.isRequired,
};

export default EditTask;
