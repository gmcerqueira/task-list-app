import './App.css';
import { Switch, Route } from 'react-router';
import Login from './components/Login';
import ConnectionStats from './components/ConnectionStats';
import Signup from './components/Signup';
import Tasks from './components/Tasks';

function App() {
  return (
    <Switch>
      <Route path="/test" component={ConnectionStats} />
      <Route path="/tasks" component={Tasks} />
      <Route path="/signup" component={Signup} />
      <Route exact path="/" component={Login} />
    </Switch>
  );
}

export default App;
