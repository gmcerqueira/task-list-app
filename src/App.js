import './App.css';
import { Switch, Route } from 'react-router';
import ConnectionStats from './components/ConnectionStats';
import Signup from './components/Signup';
import Home from './pages/Home';
import ListTasks from './pages/ListTasks';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex .flex-column align-items-center justify-content-around vh-100">
      <NavBar />
      <Switch>
        <Route path="/test" component={ConnectionStats} />
        <Route path="/tasks" component={ListTasks} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
