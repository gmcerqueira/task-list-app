import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Login from '../components/Login';
import { UserContext } from '../context/UserProvider';

const Home = () => {
  const { User } = useContext(UserContext);

  if (User.email) return <Redirect to="/tasks" />;

  return (
    <Login />
  );
};
export default Home;
