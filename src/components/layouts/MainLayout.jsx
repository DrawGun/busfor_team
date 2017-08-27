import React from 'react';
import PropTypes from 'prop-types';

import { PageHeader, Well } from 'react-bootstrap';

import Container from './Container';

const MainLayout = ({ children }) => (
  <Container>
    <Logo />

    { children }

    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;

const Logo = () => (
  <PageHeader>
    Busfor Team
  </PageHeader>
);

const Footer = () => (
  <Well className="footer">
    Powered by React Course.
  </Well>
);
