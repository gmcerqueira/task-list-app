import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Error from '../components/Error';
import Login from '../components/Login';
import { UserContext } from '../context/UserProvider';

const Home = () => {
  const { User, UserError, setUserError } = useContext(UserContext);

  if (User.email) return <Redirect to="/tasks" />;

  return (
    <div>
      {UserError ? (
        <Error error={UserError} seter={setUserError} />
      ) : (
        <Login />
      )}
    </div>
  );
};
export default Home;
