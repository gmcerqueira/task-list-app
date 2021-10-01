import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import '../styles/Login.css';

const Login = () => {
  const { handleLoginChange, login } = useContext(UserContext);

  return (
    <section className="login-container">
      <form className="login-form">
        <label htmlFor="email">
          <input type="email" name="email" placeholder="Email" onChange={handleLoginChange} />
        </label>
        <label htmlFor="password">
          <input type="password" name="password" placeholder="Password" onChange={handleLoginChange} />
        </label>
        <button type="button" onClick={login}>
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
