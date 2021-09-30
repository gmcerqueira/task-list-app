import { useContext } from 'react';
import { TaskContext } from '../context/TaskProvider';
import { UserContext } from '../context/UserProvider';

const Tasks = () => {
  const { getTasks } = useContext(TaskContext);
  const { Token } = useContext(UserContext);
  if (Token) getTasks(Token);
  return (
    <div />
  );
};

export default Tasks;
