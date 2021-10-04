/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import dateFormat from 'dateformat';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { TaskContext } from '../context/TaskProvider';
import { UserContext } from '../context/UserProvider';
import '../styles/Tasks.css';

const Tasks = () => {
  const { TasksList, getTasks, changeTaskStatus } = useContext(TaskContext);
  const { Token } = useContext(UserContext);

  if (!TasksList.length && Token) {
    getTasks(Token);
  }

  return (
    <ListGroup className="task-container">
      {TasksList
        && TasksList.map(({
          _id, text, created, status,
        }) => (
          // <ListGroup.Item
          //   action
          //   onClick={changeTaskStatus}
          //   id={_id}
          //   className="d-flex align-items-center justify-content-between"
          // >
          //   <section className="me-5">{text}</section>
          //   <section className="d-flex flex-column align-items-center opacity-50 task-date">
          //     <span>{dateFormat(created, 'hh:mm')}</span>
          //     <span>{dateFormat(created, 'dd/mm/yy')}</span>
          //   </section>
          // </ListGroup.Item>
          <ListGroup.Item className="d-flex" key={_id}>
            <Form.Check.Input type="checkbox" id={_id} checked={status === 'done'} onChange={changeTaskStatus} className="flex-shrink-0" />
            <Form.Check.Label htmlFor={_id} className="w-100">{text}</Form.Check.Label>
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
};

export default Tasks;
