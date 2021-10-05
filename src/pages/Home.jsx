import { useContext } from 'react';
import { Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Login from '../components/Login';
import { UserContext } from '../context/UserProvider';

const Home = () => {
  const { User, UserError, setUserError } = useContext(UserContext);

  if (User.email) return <Redirect to="/tasks" />;

  return (
    <div>
      {UserError ? (
        <Alert variant="danger" onClose={() => setUserError(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{UserError}</p>
        </Alert>
      ) : (
        <Login />
      )}
    </div>
  );
};
export default Home;
