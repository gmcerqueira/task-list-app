import { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [TasksList, setTasksList] = useState([]);
  const [NewTask, setNewTask] = useState('');
  useEffect(() => {}, [TasksList]);

  const getTasks = async (token) => {
    const URL = 'https://task-list-api-gmc.herokuapp.com/tasks';
    try {
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
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewTaskChange = ({ target }) => {
    const { value } = target;

    setNewTask(value);
  };

  const sendTask = async (token) => {
    if (!NewTask) return;
    const URL = 'https://task-list-api-gmc.herokuapp.com/tasks/create';
    await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ task: NewTask }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    }).then((res) => res.json());
    getTasks(token);
  };

  const context = {
    TasksList,
    getTasks,
    sendTask,
    handleNewTaskChange,
  };

  return (
    <TaskContext.Provider value={context}>{children}</TaskContext.Provider>
  );
};

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TaskProvider, TaskContext };
