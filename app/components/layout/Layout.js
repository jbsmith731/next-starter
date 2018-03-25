import React from 'react';

import s from './Layout.scss';
// import './Layout.scss';

const Layout = props => (
  <div className={s.Layout}>
    {props.children}
  </div>
);

export default Layout;
