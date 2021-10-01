import { useEffect, useState, createContext } from 'react';
import PropTypes from 'prop-types';
import {
  saveTokenLocalStorage,
  readTokenLocalStorage,
} from '../services/handleToken';
import {
  saveUserLocalStorage,
  readUserLocalStorage,
} from '../services/handleUser';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [Connection, setConnection] = useState(false);
  const [Token, setToken] = useState('');
  const [Error, setError] = useState('');
  const [User, setUser] = useState({
    _id: '',
    email: '',
    firstName: '',
    lastName: '',
  });
  const [NewUser, setNewUser] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  });
  const [Login, setLogin] = useState({ email: '', password: '' });

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
    const URL = 'https://task-list-api-gmc.herokuapp.com/signup';
    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(NewUser),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

    if (response.error) setError(response.error);
    else {
      setLogin({ email: NewUser.email, password: NewUser.password });
      login();
      setError('');
    }
  };

  const handleLoginChange = ({ target }) => {
    const { name, value } = target;

    setLogin({
      ...Login,
      [name]: value,
    });
  };

  const handleNewUserChange = ({ target }) => {
    const { name, value } = target;

    setNewUser({
      ...NewUser,
      [name]: value,
    });
  };

  useEffect(() => {
    getConnection();
    const localToken = readTokenLocalStorage();
    const localUser = readUserLocalStorage();
    if (localToken && localUser) {
      setToken(localToken);
      setUser(localUser);
    }
  }, []);

  useEffect(() => {
    saveTokenLocalStorage(Token);
  }, [Token]);

  useEffect(() => {
    saveUserLocalStorage(User);
  }, [User]);

  const context = {
    Connection,
    User,
    NewUser,
    Login,
    Token,
    Error,
    handleLoginChange,
    login,
    signUp,
    handleNewUserChange,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserProvider, UserContext };
