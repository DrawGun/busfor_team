import React from 'react';
import PropTypes from 'prop-types';

import {
  Well, Navbar, Nav, NavDropdown, MenuItem, Image, Row, Col
} from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

import Container from './Container';
import { employeName } from 'helpers/employeName';
import { employeesPath } from 'helpers/routes/employees';
import Link from 'components/elements/Link';

import team from 'constants/team';

const MainLayout = ({ children }) => (
  <Container>
    <Header />
    { children }
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;

const Header = () => (
  <Navbar className='busfor' inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'>
          <Image
            className='logo-image'
            src='/images/logo_image.svg'
            responsive />
        </Link>
        <Link to='/'>
          <Image
            className='logo-text'
            src='/images/logo_text.svg'
            responsive />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavDropdown eventKey={1} title='ABC' id='team-dropdown'>
          {team.map((employee, i) => (
            <LinkContainer
              to={employeesPath(employee.permalink)}
              key={`${employee.id}-${i}`}>

              <MenuItem eventKey={`1.${i}`} >
                { employeName(employee) }
              </MenuItem>

            </LinkContainer>
          ))}
        </NavDropdown>
      </Nav>

      <Navbar.Text pullRight className='we-have-grown'>
        Нам - 5 лет! И нас уже { team.length }!
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

const Footer = () => (
  <Well className='footer busfor'>
    <Row className='show-grid title'>
      <Col xs={12} md={12} sm={12}>
        Лучшая команда - это команда <span>BUSFOR</span>
      </Col>
    </Row>

    <Row className='show-grid links'>
      <Col xs={12} md={12} sm={12}>

        {team.map((employee, i) => (
          <Link
            key={`${employee.id}-${i}`}
            to={employeesPath(employee.permalink)}
            linkClassNames='link'>
            { `${employee.firstName}` }
          </Link>
        ))}

      </Col>
    </Row>
  </Well>
);
