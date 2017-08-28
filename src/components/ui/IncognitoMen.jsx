import React from 'react';

import { Row, Col, Image, ButtonToolbar } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import Link from 'components/elements/Link';

class IncognitoMen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row className='show-grid incognito-men'>
        <Col xs={12} md={12} sm={12} className='name-with-position'>
          <h1>Incognito Men</h1>
          <span>Возможно он среди вас!</span>
        </Col>
        <Col xs={12} md={12} sm={12} className='description'>
          <Row>
            <Col xs={12} md={5} sm={6} className='image'>
              <Image
                src="/images/incognito.png"
                alt="Incognito Men"
                title="Incognito Men"
                rounded
                responsive
                thumbnail />
            </Col>
            <Col xs={12} md={7} sm={6} className='info'>
              <p className='info-item'>
                Мы не нашли сотрудника, соответствующего данному URL.
                Пожалуйста, вернитесь на главную страницу и попробуйте еще раз!
              </p>
              <ButtonToolbar>
                <Link to="/" linkClassNames='incognito-link'>
                  На главную
                </Link>
              </ButtonToolbar>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={12} sm={12} className='navs' >
          <ButtonToolbar className='pull-right'>
            <Link to="/" linkClassNames='incognito-link' />
          </ButtonToolbar>
        </Col>
        <Helmet title="Incognito Men">
          <meta name="description" content="Incognito Men" />
        </Helmet>
      </Row>
    );
  }
}

export default IncognitoMen;
