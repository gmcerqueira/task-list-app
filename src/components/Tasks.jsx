import { useContext } from 'react';
import dateFormat from 'dateformat';
import { TaskContext } from '../context/TaskProvider';
import { UserContext } from '../context/UserProvider';
import UserInfo from './UserInfo';

const Tasks = () => {
  const {
    TasksList, getTasks, sendTask, handleNewTaskChange,
  } = useContext(TaskContext);
  const { Token } = useContext(UserContext);

  if (!TasksList.length && Token) { getTasks(Token); }

  return (
    <div>
      <h2>Tasks</h2>
      <UserInfo />
      <section>
        <h3>New task</h3>
        <textarea name="taskText" id="taskText" cols="30" rows="10" onChange={handleNewTaskChange} />
        <button type="button" onClick={() => sendTask(Token)}>Add</button>
      </section>
      {TasksList
        && TasksList.map(({ _id, text, created }) => (
          <p key={_id}>
            {`${text} ${dateFormat(created, 'hh:mm - dd/mm/yyyy')}`}
          </p>
        ))}
    </div>
  );
};

export default Tasks;
