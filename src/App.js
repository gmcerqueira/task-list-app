import "./App.css";
import UserProvider from "./context/UserProvider.jsx";
import Connection from "./components/Connection.jsx";
import Login from "./components/Login.jsx";

function App() {
  return (
    <UserProvider>
      <Connection/>
      <Login/>
    </UserProvider>
  );
}

export default App;
