import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

class EmployeeContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, "HUY");
  }

  render() {
    return (
      <div>GYT</div>
    );
  }
}

// EmployeeContainer.propTypes = {
//   item: PropTypes.object,
//   isFetching: PropTypes.bool
// };

// EmployeeContainer.defaultProps = {
//   item: {}
// };

export default EmployeeContainer;
