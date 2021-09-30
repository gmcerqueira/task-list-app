import './App.css';
import UserProvider from './context/UserProvider';
import Connection from './components/Connection';
import Login from './components/Login';

function App() {
  return (
    <UserProvider>
      <Connection />
      <Login />
    </UserProvider>
  );
}

export default App;
