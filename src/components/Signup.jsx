import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

const Signup = () => {
  const { handleNewUserChange, signUp, handleLoginChange } = useContext(UserContext);

  return (
    <section>
      <h2>Sign up</h2>
      <form>
        <label htmlFor="firstName">
          First name:
          <input type="text" name="firstName" onChange={handleNewUserChange} />
        </label>
        <label htmlFor="lastName">
          Last name:
          <input type="text" name="lastName" onChange={handleNewUserChange} />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            onChange={(e) => {
              handleNewUserChange(e);
              handleLoginChange(e);
            }}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => {
              handleNewUserChange(e);
              handleLoginChange(e);
            }}
          />
        </label>
        <button type="button" onClick={signUp}>
          Register
        </button>
      </form>
    </section>
  );
};

export default Signup;
