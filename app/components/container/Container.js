import React from 'react';

import s from './Container.scss';

const Container = props => (
  <div className={s.Container}>
    {props.children}
  </div>
);

export default Container;
