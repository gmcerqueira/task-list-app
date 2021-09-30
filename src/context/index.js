import PropTypes from 'prop-types';
import { UserProvider } from './UserProvider';

function Provider({ children }) {
  return <UserProvider>{children}</UserProvider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
