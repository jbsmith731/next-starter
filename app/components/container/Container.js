import React from 'react';
import PropTypes from 'prop-types';

import s from './Container.scss';

const Container = props => (
  <div className={s.Container}>
    {props.children}
  </div>
);

Container.proptTypes = {
  children: PropTypes.node,
};

export default Container;
