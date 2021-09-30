import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import UserContext from './UserContext';

const UserProvider = ({ children }) => {
  const [Connection, setConnection] = useState(false);
  const [Token, setToken] = useState('');
  const [Error, setError] = useState('');
  const [User, setUser] = useState({
    email: 'abc@abc.com',
    password: '123456',
  });

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
      body: JSON.stringify(User),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

    if (response.token) {
      setToken(response.token);
      setError('');
    } else {
      setError(response.error);
      setToken('');
    }
  };

  const handleInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    setUser({
      ...User,
      [name]: value,
    });
  };

  useEffect(() => {
    getConnection();
  }, []);

  const context = {
    Connection,
    User,
    Token,
    Error,
    handleInputChange,
    login,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
