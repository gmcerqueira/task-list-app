import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [TasksList, setTasksList] = useState([]);
  const [NewTask, setNewTask] = useState('');
  const [Sent, setSent] = useState(false);
  const [Loading, setLoading] = useState(true);

  const getTasks = async (token) => {
    console.log('carregando...');
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

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewTaskChange = ({ target }) => {
    const { value } = target;

    setNewTask(value);
  };

  const editTask = async (id, text, token) => {
    setLoading(true);

    const URL = `https://task-list-api-gmc.herokuapp.com/tasks/${id}`;

    try {
      await fetch(URL, {
        method: 'PUT',
        body: JSON.stringify({ task: text }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      }).then((res) => res.json());

      const newList = TasksList.map((task) => {
        const { _id } = task;
        if (_id === id) {
          return { ...task, text };
        }
        return task;
      });

      setTasksList(newList);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const sendTask = async (token) => {
    setLoading(true);

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

      await getTasks(token);

      setNewTask('');
      setSent(true);

      setTimeout(() => {
        setSent(false);
        clearInterval();
      }, 3000);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const changeTaskStatus = async ({ target }, token) => {
    const { id } = target;
    const taskText = target.nextSibling;

    taskText.classList.toggle('task-done');

    const URL = `https://task-list-api-gmc.herokuapp.com/tasks/check/${id}`;

    try {
      fetch(URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      }).then((res) => res.json());
    } catch (error) {
      console.log(error);
    }

    const newList = TasksList.map((task) => {
      const { _id, status } = task;
      if (_id === id) {
        return { ...task, status: status === 'done' ? 'pending' : 'done' };
      }
      return task;
    });

    setTasksList(newList);
  };

  const findTask = (id) => TasksList.find(({ _id }) => _id === id).text;

  const context = {
    TasksList,
    Sent,
    Loading,
    getTasks,
    sendTask,
    editTask,
    handleNewTaskChange,
    changeTaskStatus,
    findTask,
  };

  return (
    <TaskContext.Provider value={context}>{children}</TaskContext.Provider>
  );
};

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TaskProvider, TaskContext };
