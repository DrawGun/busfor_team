import React from 'react';
import PropTypes from 'prop-types';

import { replace } from 'lodash/string';
import { find } from 'lodash/collection';
import { findIndex } from 'lodash/array';

import Employee from 'components/ui/Employee';
import IncognitoMen from 'components/ui/IncognitoMen';
import { employeesPath } from 'helpers/routes/employees';

import team from 'constants/team';

class TeamContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pathname = this.props.location.pathname;
    const permalink = replace(pathname, '/', '');
    const employee = find(team, (e) => (e.permalink == permalink));

    return (
      employee ? this.renderEmployee(employee) : this.renderIncognito()
    );
  }

  renderEmployee(employee) {
    let prevIndex;
    let nextIndex;
    const index = findIndex(team, (e) => (e.permalink == employee.permalink));

    if (index == 0) {
      prevIndex = team.length - 1;
      nextIndex = index + 1;
    } else if (index == team.length - 1) {
      prevIndex = team.length - 2;
      nextIndex = 0;
    } else {
      prevIndex = index - 1;
      nextIndex = index + 1;
    }

    return (
      <Employee
        employee={employee}
        prev={employeesPath(team[prevIndex].permalink)}
        next={employeesPath(team[nextIndex].permalink)} />
    );
  }

  renderIncognito() {
    return (
      <IncognitoMen />
    );
  }
}

TeamContainer.propTypes = {
  location: PropTypes.object
};

TeamContainer.defaultProps = {
  location: {}
};

export default TeamContainer;
