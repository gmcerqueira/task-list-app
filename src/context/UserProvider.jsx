import { useEffect, useState, createContext } from 'react';
import PropTypes from 'prop-types';
import {
  saveTokenLocalStorage,
  readTokenLocalStorage,
  deleteTokenLocalStorage,
} from '../services/handleToken';
import {
  saveUserLocalStorage,
  readUserLocalStorage,
  deleteUserLocalStorage,
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
    passwordConfirmation: '',
  });
  const [Login, setLogin] = useState({ email: '', password: '' });
  const [SaveLogin, setSaveLogin] = useState(false);
  const [Loading, setLoading] = useState(false);

  const confirmPassword = () => {
    const { passwordConfirmation, password } = NewUser;

    return passwordConfirmation === password;
  };

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
      setUserError(error.message);
      setConnection(false);
    }
  };

  const login = async () => {
    setLoading(true);
    const URL = 'https://task-list-api-gmc.herokuapp.com/login';
    try {
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
    } catch (error) {
      setUserError(error.message);
    }

    setLoading(false);
  };

  const signUp = async () => {
    setLoading(true);
    if (!confirmPassword()) {
      setLoading(false);

      setUserError('Passwords do not match');
      return;
    }
    const { passwordConfirmation, ...user } = NewUser;
    const URL = 'https://task-list-api-gmc.herokuapp.com/signup';

    try {
      const response = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());

      if (response.error) setUserError(response.error);
      else {
        setUserError('');
        login();
      }
    } catch (error) {
      setUserError(error.message);
    }

    setLoading(false);
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

  const signOut = () => {
    deleteTokenLocalStorage();
    deleteUserLocalStorage();
    setUser({
      _id: '',
      email: '',
      firstName: '',
      lastName: '',
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
    signOut,
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
