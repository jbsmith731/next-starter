import App, { Container as NextContainer } from 'next/app';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'arial', sans-serif;
    line-height: 1.5;
    color: #333;
  }
`;

export default class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <NextContainer>
        <Helmet
          defaultTitle="next.js!"
          titleTemplate="%s | Next.js Starter"
        >
          <title>Next.js</title>
        </Helmet>
        <Component {...pageProps} />
        <GlobalStyle />
      </NextContainer>
    );
  }
}
