/* eslint-disable no-unused-vars */
import { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from './UserProvider';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [TasksList, setTasksList] = useState([]);

  const getTasks = async (token) => {
    const URL = 'https://task-list-api-gmc.herokuapp.com/tasks';
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    }).then((res) => res.json());

    if (response.tasks) {
      setTasksList(response.tasks);
    }
  };

  const context = { TasksList, getTasks };

  return (
    <TaskContext.Provider value={context}>{children}</TaskContext.Provider>
  );
};

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TaskProvider, TaskContext };
