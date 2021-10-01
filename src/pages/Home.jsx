import { Link } from 'react-router-dom';

import Login from '../components/Login';

const Home = () => (
  <div>
    <Login />
    <Link to="/signup">Sign up</Link>
  </div>
);

export default Home;
