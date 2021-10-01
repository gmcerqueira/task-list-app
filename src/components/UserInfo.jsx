import { useContext } from 'react';
import { UserProvider } from '../context/UserProvider';

const UserInfo = () => {
  const { User } = useContext(UserProvider);
  const { firstName, lastName, email } = User;
  return (
    <div>
      <p>{`Name: ${firstName} ${lastName}`}</p>
      <p>{`Email: ${email}`}</p>
    </div>
  );
};

export default UserInfo;
