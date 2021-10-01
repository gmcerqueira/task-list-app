import { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../styles/Home.css';
import Login from '../components/Login';
import { UserContext } from '../context/UserProvider';

const Home = () => {
  const { User } = useContext(UserContext);

  if (User.email) return <Redirect to="/tasks" />;

  return (
    <div className="home-container">
      <Login />
      <Link to="/signup" className="signup-link">Sign up</Link>
    </div>
  );
};
export default Home;
