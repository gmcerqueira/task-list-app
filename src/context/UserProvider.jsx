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
  const [UserError, setUserError] = useState(false);
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
  const [SaveLogin, setSaveLogin] = useState(false);
  const [Loading, setLoading] = useState(false);

  const getConnection = async () => {
    const CONNECTION_URL = 'https://task-list-api-gmc.herokuapp.com/';
    try {
      const response = await fetch(CONNECTION_URL, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then(({ connection }) => connection);

      setConnection(response);
    } catch (error) {
      console.log(error);
      setConnection(false);
    }
  };

  const login = async () => {
    setLoading(true);
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
      setUserError('');
    } else {
      setUserError(response.error);
      setToken('');
    }
    setLoading(false);
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

    if (response.error) setUserError(response.error);
    else {
      setLogin({ email: NewUser.email, password: NewUser.password });
      login();
      setUserError('');
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
    if (SaveLogin) saveTokenLocalStorage(Token);
  }, [Token]);

  useEffect(() => {
    if (SaveLogin) saveUserLocalStorage(User);
  }, [User]);

  const context = {
    Connection,
    User,
    NewUser,
    Login,
    Token,
    UserError,
    SaveLogin,
    Loading,
    handleLoginChange,
    login,
    signUp,
    handleNewUserChange,
    setSaveLogin,
    setUserError,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserProvider, UserContext };
