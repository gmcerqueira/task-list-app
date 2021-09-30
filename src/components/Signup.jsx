import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

const Signup = () => {
  const { handleInputChange, signUp } = useContext(UserContext);

  return (
    <section>
      <h2>Sign up</h2>
      <form>
        <label htmlFor="firstName">
          First name:
          <input type="text" name="firstName" onChange={handleInputChange} />
        </label>
        <label htmlFor="lastName">
          Last name:
          <input type="text" name="lastName" onChange={handleInputChange} />
        </label>
        <label htmlFor="email">
          Email:
          <input type="text" name="email" onChange={handleInputChange} />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" name="password" onChange={handleInputChange} />
        </label>
        <button type="button" onClick={signUp}>
          Register
        </button>
      </form>
    </section>
  );
};

export default Signup;
