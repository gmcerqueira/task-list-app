import { useContext } from 'react';
import { TaskContext } from '../context/TaskProvider';
import { UserContext } from '../context/UserProvider';

const NewTask = () => {
  const { sendTask, handleNewTaskChange } = useContext(TaskContext);
  const { Token } = useContext(UserContext);
  return (
    <div>
      <textarea
        name="taskText"
        id="taskText"
        cols="30"
        rows="10"
        onChange={handleNewTaskChange}
      />
      <button type="button" onClick={() => sendTask(Token)}>
        Add
      </button>
    </div>
  );
};

export default NewTask;
