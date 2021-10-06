/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tasks from '../components/Tasks';
import NewTask from '../components/NewTask';
import { TaskContext } from '../context/TaskProvider';
import Error from '../components/Error';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="m"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">New task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NewTask setModalShow={props.setModalShow} />
      </Modal.Body>
    </Modal>
  );
}

const ListTasks = () => {
  const [modalShow, setModalShow] = useState(false);
  const { TaskError, setTaskError } = useContext(TaskContext);

  return TaskError ? (
    <Error
      error={(
        <>
          {TaskError}
          <hr />
          <p className="text-muted fs-6 w-75">
            If you are already logged in, close this window to reload.
          </p>
        </>
      )}
      seter={setTaskError}
    />
  ) : (
    <section className="d-flex flex-column align-items-center">
      <Button
        variant="primary"
        onClick={() => setModalShow(true)}
        className="mb-4"
      >
        New task
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
      <Tasks />
    </section>
  );
};
export default ListTasks;
