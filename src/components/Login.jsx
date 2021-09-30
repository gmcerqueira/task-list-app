import { useContext } from 'react';
import UserContext from '../context/UserContext';

const Login = () => {
  const { handleInputChange, login } = useContext(UserContext);

  return (
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
  );
};

export default Login;
