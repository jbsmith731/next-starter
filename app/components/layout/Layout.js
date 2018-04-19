import React from 'react';
import PropTypes from 'prop-types';

import s from './Layout.scss';

const Layout = props => (
  <div className={s.Layout}>
    {props.children}
  </div>
);

Layout.proptTypes = {
  children: PropTypes.node,
};

export default Layout;
