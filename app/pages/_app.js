/* eslint-disable no-console, no-unused-vars */
import App, { Container } from 'next/app';
import React from 'react';
import {
  TransitionGroup,
  Transition,
} from 'react-transition-group';

export default class MyApp extends App {

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
      <Container>
        <TransitionGroup>
          <Transition
            appear
            onEnter={() => { console.log('onEnter'); }}
            onEntering={() => { console.log('onEntering'); }}
            onEntered={() => { console.log('onEntered'); }}
            onExit={() => { console.log('onExit'); }}
            onExiting={() => { console.log('onExiting'); }}
            onExited={() => { console.log('onExited'); }}
            timeout={500}
            key={this.props.router.route}
          >
            <Component {...pageProps} />
          </Transition>
        </TransitionGroup>
      </Container>
    );
  }
}
