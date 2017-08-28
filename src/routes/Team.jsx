import TeamContainer from 'containers/TeamContainer';

import { employeesPath } from 'helpers/routes/employees';

const Team = {
  exact: true,
  path: employeesPath(),
  component: TeamContainer
};

export default Team;
