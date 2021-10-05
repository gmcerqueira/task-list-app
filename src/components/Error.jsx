/* eslint-disable react/prop-types */
import Alert from 'react-bootstrap/Alert';

const Error = ({ error, seter }) => (
  <div>
    <Alert variant="danger" onClose={() => seter(false)} dismissible>
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>{error}</p>
    </Alert>
  </div>
);

export default Error;
