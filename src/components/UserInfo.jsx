import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

const UserInfo = () => {
  const { User } = useContext(UserContext);
  const { firstName, lastName, email } = User;
  return (
    <div>
      <p>{`Name: ${firstName} ${lastName}`}</p>
      <p>{`Email: ${email}`}</p>
    </div>
  );
};

export default UserInfo;
