import React from 'react';
import PropTypes from 'prop-types';

import { join } from 'lodash/array';
import { Row, Col, Image, ButtonToolbar } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import { employeName } from 'helpers/employeName';
import Link from 'components/elements/Link';

class Employee extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { employee, prev, next  } = this.props;
    const image = employee.image || '/images/incognito.png';

    return (
      <Row className='show-grid employee'>
        <Col xs={12} md={12} sm={12} className='name-with-position'>
          <h1>{ employeName(employee) }</h1>
          <span>({ employee.position })</span>
        </Col>
        <Col xs={12} md={12} sm={12} className='description'>
          <Row>
            <Col xs={12} md={5} sm={6} className='image'>
              <Image
                src={ image }
                alt={ employee.permalink }
                title={ employeName(employee) }
                rounded
                responsive
                thumbnail />
            </Col>
            <Col xs={12} md={7} sm={6} className='info'>
              {employee.info.map((info, i) => (
                <p
                  key={`${employee.id}-${i}`}
                  className='info-item'>
                  { info }
                </p>
              ))}
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={12} sm={12} className='navs' >
          <ButtonToolbar className='pull-right'>
            <Link to={ prev } linkClassNames='prev' />
            <Link to={ next } linkClassNames='next' />
          </ButtonToolbar>
        </Col>
        <Helmet title={ employeName(employee) }>
          <meta name="description" content={join(employee.info, '. ')} />
        </Helmet>
      </Row>
    );
  }
}

Employee.propTypes = {
  employee: PropTypes.object,
  prev: PropTypes.string,
  next: PropTypes.string
};

Employee.defaultProps = {
  employee: {},
  prev: '',
  next: ''
};

export default Employee;
