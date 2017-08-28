import React from 'react';

import team from 'constants/team';

import Employee from 'components/ui/Employee';
import { employeesPath } from 'helpers/routes/employees';

class EmployeeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const index = 0;
    const employee = team[index];
    const prevIndex = team.length - 1;
    const nextIndex = index + 1;
    
    return (
      <Employee
        employee={employee}
        prev={employeesPath(team[prevIndex].permalink)}
        next={employeesPath(team[nextIndex].permalink)} />
    );
  }
}

export default EmployeeContainer;
