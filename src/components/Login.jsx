/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { UserContext } from '../context/UserProvider';

import '../styles/Login.css';

const Login = () => {
  const {
    handleLoginChange, login, SaveLogin, setSaveLogin, Loading,
  } = useContext(UserContext);

  return (
    <Form className="login-form">
      <h1 className="h3 mb-3 fw-normal">Welcome</h1>
      <Form.FloatingLabel
        controlId="email"
        label="Email"
        className="opacity-50"
      >
        <Form.Control
          type="email"
          placeholder="name@example.com"
          name="email"
          onChange={handleLoginChange}
          className="login-email-input"
        />
      </Form.FloatingLabel>
      <Form.FloatingLabel
        controlId="password"
        label="Password"
        className="opacity-50"
      >
        <Form.Control
          type="password"
          placeholder="password"
          name="password"
          onChange={handleLoginChange}
          className="login-password-input mb-2"
        />
      </Form.FloatingLabel>
      <Form.Check
        type="checkbox"
        label="Remember me"
        className="mb-3"
        onChange={() => setSaveLogin(!SaveLogin)}
      />

      <Button variant="primary" onClick={login} className="mb-3 w-100" disabled={Loading}>
        {Loading ? (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        ) : (
          'Login'
        )}
      </Button>
      <Link variant="success" to="/signup" className="w-100 btn btn-success">
        Sign up
      </Link>
    </Form>
  );
};

export default Login;
