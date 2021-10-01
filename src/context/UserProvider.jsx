import { useEffect, useState, createContext } from 'react';
import PropTypes from 'prop-types';
import {
  saveTokenLocalStorage,
  readTokenLocalStorage,
} from '../services/handleToken';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [Connection, setConnection] = useState(false);
  const [Token, setToken] = useState('');
  const [Error, setError] = useState('');
  const [User, setUser] = useState({});
  const [Login, setLogin] = useState({});

  const getConnection = async () => {
    const CONNECTION_URL = 'https://task-list-api-gmc.herokuapp.com/';
    const response = await fetch(CONNECTION_URL, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then(({ connection }) => connection);

    setConnection(response);
  };

  const login = async () => {
    const URL = 'https://task-list-api-gmc.herokuapp.com/login';
    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(Login),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

    if (response.token) {
      setToken(response.token);
      setUser(response.user);
      setError('');
    } else {
      setError(response.error);
      setToken('');
    }
  };

  const signUp = async () => {
    const URL = 'https://task-list-api-gmc.herokuapp.com/singup';
    await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(User),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  };

  const handleLoginChange = ({ target }) => {
    const { name, value } = target;

    setLogin({
      ...Login,
      [name]: value,
    });
  };

  useEffect(() => {
    getConnection();
    const localToken = readTokenLocalStorage();
    setToken(localToken);
  }, []);

  useEffect(() => {
    saveTokenLocalStorage(Token);
  }, [Token]);

  const context = {
    Connection,
    User,
    Token,
    Error,
    handleLoginChange,
    login,
    signUp,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserProvider, UserContext };
