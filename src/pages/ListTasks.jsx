/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tasks from '../components/Tasks';
import NewTask from '../components/NewTask';

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
        <NewTask />
      </Modal.Body>
    </Modal>
  );
}

const ListTasks = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <section className="d-flex flex-column align-items-center">
      <Button variant="primary" onClick={() => setModalShow(true)} className="mb-4">
        New task
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Tasks />
    </section>
  );
};
export default ListTasks;
