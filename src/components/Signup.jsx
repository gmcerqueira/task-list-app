/* eslint-disable no-unused-vars */
import { Redirect } from 'react-router-dom';
import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { UserContext } from '../context/UserProvider';
import '../styles/Signup.css';

const Signup = () => {
  const {
    handleNewUserChange, signUp, handleLoginChange, User,
  } = useContext(UserContext);
  if (User.email) return <Redirect to="/tasks" />;

  return (
    <Form className="signUp-form">
      <h1 className="h3 mb-3 fw-normal">Sign up</h1>

      <Form.FloatingLabel
        controlId="newEmail"
        label="Email"
        className="opacity-50 w-100 mb-3"
      >
        <Form.Control
          type="email"
          placeholder="exemple@exemple.com"
          name="email"
          onChange={(e) => {
            handleNewUserChange(e);
            handleLoginChange(e);
          }}
          className=""
        />
      </Form.FloatingLabel>

      <Row className="m-0 mb-3 w-100">
        <Form.FloatingLabel
          as={Col}
          controlId="newFirstName"
          label="First name"
          className="opacity-50 p-0 me-2"
        >
          <Form.Control
            type="text"
            placeholder="John"
            name="firstName"
            onChange={handleNewUserChange}
            className=""
          />
        </Form.FloatingLabel>

        <Form.FloatingLabel
          as={Col}
          controlId="newLastName"
          label="Last name"
          className="opacity-50 p-0  ms-2"
        >
          <Form.Control
            type="text"
            placeholder="Snow"
            name="lastName"
            onChange={handleNewUserChange}
            className=""
          />
        </Form.FloatingLabel>
      </Row>
      <Row className="m-0 mb-3 w-100">
        <Form.FloatingLabel
          as={Col}
          controlId="newPassword"
          label="Password"
          className="opacity-50 p-0 me-2"
        >
          <Form.Control
            type="password"
            placeholder="abc123"
            name="password"
            onChange={(e) => {
              handleNewUserChange(e);
              handleLoginChange(e);
            }}
            className=""
          />
        </Form.FloatingLabel>

        <Form.FloatingLabel
          as={Col}
          controlId="newPassword"
          label="Repeat Password"
          className="opacity-50 p-0 ms-2"
        >
          <Form.Control
            type="passwordConfirmation"
            placeholder="abc123"
            name="passwordConfirmation"
            onChange={(e) => {
              handleNewUserChange(e);
            }}
            className=""
          />
        </Form.FloatingLabel>
      </Row>

      <Button variant="success" className="w-25">
        Sign up
      </Button>
    </Form>
  );
};

export default Signup;
