import PropTypes from 'prop-types';
import { TaskProvider } from './TaskProvider';
import { UserProvider } from './UserProvider';

function Provider({ children }) {
  return (
    <TaskProvider>
      <UserProvider>
        {children}
      </UserProvider>
    </TaskProvider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
