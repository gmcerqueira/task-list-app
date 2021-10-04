import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [TasksList, setTasksList] = useState([]);
  const [NewTask, setNewTask] = useState('');
  const [Sent, setSent] = useState(false);

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

  const handleNewTaskChange = ({ target }) => {
    const { value } = target;

    setNewTask(value);
  };

  const sendTask = async (token) => {
    if (!NewTask) {
      alert('Must type task...');
      return;
    }
    if (Sent) return;
    const URL = 'https://task-list-api-gmc.herokuapp.com/tasks/create';
    try {
      await fetch(URL, {
        method: 'POST',
        body: JSON.stringify({ task: NewTask }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      }).then((res) => res.json());

      getTasks(token);
      setNewTask('');
      setSent(true);
      setTimeout(() => {
        setSent(false);
        clearInterval();
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const changeTaskStatus = async ({ target }, token) => {
    const { id } = target;
    const taskText = target.nextSibling;
    taskText.classList.toggle('task-done');
    const URL = `https://task-list-api-gmc.herokuapp.com/tasks/check/${id}`;
    fetch(URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    }).then((res) => res.json());
    const newList = TasksList.map((task) => {
      const { _id, status } = task;
      if (_id === id) {
        return { ...task, status: status === 'done' ? 'pending' : 'done' };
      }
      return task;
    });

    setTasksList(newList);
  };

  const context = {
    TasksList,
    Sent,
    getTasks,
    sendTask,
    handleNewTaskChange,
    changeTaskStatus,
  };

  return (
    <TaskContext.Provider value={context}>{children}</TaskContext.Provider>
  );
};

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TaskProvider, TaskContext };
