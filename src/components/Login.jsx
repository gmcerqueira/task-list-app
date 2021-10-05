import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { UserContext } from '../context/UserProvider';

import '../styles/Login.css';

const Login = () => {
  const { handleLoginChange, login } = useContext(UserContext);

  return (
    <Form className="login-form">
      <section className="round">
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
            className="login-password-input"
          />
        </Form.FloatingLabel>
      </section>

      <Button size="lg" variant="primary" onClick={login} className="mb-3">
        Login
      </Button>
      <Button size="lg" variant="success" href="/signup">
        Sign up
      </Button>
    </Form>
  );
};

export default Login;
