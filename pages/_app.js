import React from 'react';
import App from 'next/app';
import '../styles/index.css';

// NOTE: silence SSR warning on the server
React.useLayoutEffect = React.useEffect;

export default class Revolve extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}
