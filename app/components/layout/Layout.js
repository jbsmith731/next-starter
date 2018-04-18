import React from 'react';
import { Link, Router } from '../../routes';

import s from './Layout.scss';
// import './Layout.scss';

const Layout = (props) => {

  const changeLang = (lang) => {
    const { url } = props;
    const exp = /(en|es)/;
    let newUrl;

    if (exp.test(props.url)) {
      newUrl = url.replace(exp, lang);
    } else {
      newUrl = `/${lang + url}`;
    }

    Router.pushRoute(newUrl);
  };

  return (
    <div className={s.Layout}>
      <header>
        <Link route="/">
          <a>
            Home
          </a>
        </Link>

        <button onClick={() => changeLang('en')}>English</button>
        <button onClick={() => changeLang('es')}>Espanol</button>
      </header>

      {props.children}
    </div>
  );
};

export default Layout;
