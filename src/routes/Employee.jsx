import EmployeeContainer from 'containers/EmployeeContainer';

import { employeesPath } from 'helpers/routes/employees';

const Employee = {
  exact: true,
  path: employeesPath(),
  component: EmployeeContainer
};

export default Employee;
