import React from 'react';
import PropTypes from 'prop-types';

import { Link as DomLink } from 'react-router-dom';

class Link extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      global.__TEST__ ? this.renderTestLink() : this.renderCustomLink()
    );
  }

  renderCustomLink() {
    const { wrapperClassNames } = this.props;

    return (
      wrapperClassNames ? this.renderWithWrapper() : this.renderDomLink()
    );
  }

  renderWithWrapper() {
    const { wrapperClassNames } = this.props;

    return (
      <div className={ wrapperClassNames }>
        this.renderDomLink()
      </div>
    );
  }

  renderDomLink() {
    const { linkClassNames, to, children } = this.props;

    return (
      <DomLink className={ linkClassNames } to={ to }>{ children }</DomLink>
    );
  }

  renderTestLink() {
    const { to, children } = this.props;

    return (
      <a href={to}>
        { children }
      </a>
    );
  }
}

Link.propTypes = {
  wrapperClassNames: PropTypes.string,
  linkClassNames: PropTypes.string,
  children: PropTypes.node,
  to: PropTypes.string
};

export default Link;
