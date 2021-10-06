/* eslint-disable react/prop-types */
import Alert from 'react-bootstrap/Alert';

const Error = ({ error, seter }) => (
  <div>
    <Alert variant="danger" onClose={() => seter(false)} dismissible>
      <Alert.Heading>{error}</Alert.Heading>
      {/* <p className="fs-4">{error}</p> */}
    </Alert>
  </div>
);

export default Error;
