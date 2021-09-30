import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

const Login = () => {
  const { handleInputChange, login } = useContext(UserContext);

  return (
    <section>
      <h2>Login</h2>
      <form>
        <label htmlFor="email">
          Email:
          <input type="text" name="email" onChange={handleInputChange} />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" name="password" onChange={handleInputChange} />
        </label>
        <button type="button" onClick={login}>
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
