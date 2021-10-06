import PropTypes from 'prop-types';

import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tasks from '../components/Tasks';
import NewTask from '../components/NewTask';
import { TaskContext } from '../context/TaskProvider';
import Error from '../components/Error';

function NewTaskModal({ show, onHide, setModalShow }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="m"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">New task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NewTask setModalShow={setModalShow} />
      </Modal.Body>
    </Modal>
  );
}

NewTaskModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  setModalShow: PropTypes.func,
};

NewTaskModal.defaultProps = {
  setModalShow: () => {},
};

const ListTasks = () => {
  const [modalShow, setModalShow] = useState(false);
  const { TaskError, setTaskError, Sending } = useContext(TaskContext);

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

      <NewTaskModal show={modalShow && !Sending} onHide={() => setModalShow(false)} />

      <Tasks />
    </section>
  );
};
export default ListTasks;
