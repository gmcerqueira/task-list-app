/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Login from '../components/Login';
import { UserContext } from '../context/UserProvider';

const Home = () => {
  const { User } = useContext(UserContext);

  if (User.email) return <Redirect to="/tasks" />;

  return (
    <div>
      <Login />
      <Link to="/signup">Sign up</Link>
    </div>
  );
};
export default Home;
