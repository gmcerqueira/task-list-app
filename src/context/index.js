import PropTypes from 'prop-types';
import { TaskProvider } from './TaskProvider';
import { UserProvider } from './UserProvider';

function Provider({ children }) {
  return (
    <UserProvider>
      <TaskProvider>
        {children}
      </TaskProvider>
    </UserProvider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
