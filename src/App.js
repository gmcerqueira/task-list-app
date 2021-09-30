import logo from "./logo.svg";
import "./App.css";
import UserProvider from "./context/UserProvider.jsx";
import Connection from "./components/Connection.jsx";

function App() {
  return (
    <UserProvider>
      <Connection/>
    </UserProvider>
  );
}

export default App;
