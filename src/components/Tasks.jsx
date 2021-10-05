/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { useContext, useEffect, useState } from 'react';
import { Edit, Trash2 } from 'react-feather';
import dateFormat from 'dateformat';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { TaskContext } from '../context/TaskProvider';
import { UserContext } from '../context/UserProvider';
import '../styles/Tasks.css';
import EditTask from './EditTask';

const Tasks = () => {
  const [ModalShow, setModalShow] = useState(false);
  const [TaskToEdit, setTaskToEdit] = useState('');

  const {
    TasksList, getTasks, changeTaskStatus, Loading, deleteTask, Sent,
  } = useContext(TaskContext);
  const { Token } = useContext(UserContext);

  useEffect(() => {
    if (Token) getTasks(Token);
  }, [Token]);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditTask id={TaskToEdit} setModalShow={setModalShow} />
        </Modal.Body>
      </Modal>
    );
  }

  return Loading ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <ListGroup className="task-container">
      {TasksList
        && TasksList.map(({
          _id, text, created, status,
        }) => (
          <ListGroup.Item className="d-flex align-items-center" key={_id}>
            <Form.Check.Input
              type="checkbox"
              id={_id}
              checked={status === 'done'}
              onChange={(e) => changeTaskStatus(e, Token)}
              className="flex-shrink-0"
            />
            <Form.Check.Label
              htmlFor={_id}
              className={`w-100 mx-3 ${status === 'done' ? 'task-done' : ''}`}
            >
              {text}
            </Form.Check.Label>
            <Form.Text className="d-flex flex-column align-items-center opacity-50 task-date">
              <span>{dateFormat(created, 'hh:mm')}</span>
              <span>{dateFormat(created, 'dd/mm/yy')}</span>
            </Form.Text>
            <ButtonGroup size="sm" className="ms-2">
              <Button
                variant="secondary"
                id={_id}
                onClick={({ target }) => {
                  setTaskToEdit(target.id);
                  setModalShow(true);
                }}
                className="task-button"
              >
                <Edit id={_id} />
              </Button>
              <Button
                variant="danger"
                id={_id}
                onClick={(e) => deleteTask(e, Token)}
                className="task-button"

              >
                {Sent ? (
                  <Spinner animation="border" variant="light" size="sm" />
                ) : (
                  <Trash2 />
                )}
              </Button>
            </ButtonGroup>
          </ListGroup.Item>
        ))}

      <MyVerticallyCenteredModal
        show={ModalShow}
        onHide={() => {
          setModalShow(false);
          setTaskToEdit('');
        }}
      />
    </ListGroup>
  );
};

export default Tasks;
