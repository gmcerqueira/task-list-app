import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

const UserInfo = () => {
  const { User } = useContext(UserContext);
  const { firstName, lastName } = User;
  return (
    <div>
      <p>{`User: ${firstName} ${lastName}`}</p>
    </div>
  );
};

export default UserInfo;
