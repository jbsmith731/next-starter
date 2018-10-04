import App, { Container as NextContainer } from 'next/app';
import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

export default class MyApp extends App {

  // eslint-disable-next-line no-unused-vars
  static async getInitialProps({ Component, router, ctx }) {
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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextContainer>
    );
  }
}
