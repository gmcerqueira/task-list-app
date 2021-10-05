import './App.css';
import { Switch, Route } from 'react-router';
import ConnectionStats from './components/ConnectionStats';
import Signup from './components/Signup';
// import Tasks from './components/Tasks';
import Home from './pages/Home';
// import NewTask from './components/NewTask';
import ListTasks from './pages/ListTasks';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/test" component={ConnectionStats} />
        <Route path="/tasks" component={ListTasks} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={Home} />
      </Switch>
      <ConnectionStats />
    </div>
  );
}

export default App;
