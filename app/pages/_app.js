import App, { Container as NextContainer } from 'next/app';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

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
        <Component {...pageProps} />
        <GlobalStyle />
      </NextContainer>
    );
  }
}
