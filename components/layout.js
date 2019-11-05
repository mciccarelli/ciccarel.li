import React from 'react';
import Head from 'next/head';
import { Nav, Footer } from '../components';

const Layout = ({ title, children }) => (
  <div className="wrap">
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
    </Head>
    <Nav />
    <main>{children}</main>
    <Footer />
    <style jsx>{`
      .wrap {
      }
    `}</style>
  </div>
);

Layout.defaultProps = {
  title: 'Michael Ciccarelli, freelance developer',
};

export default Layout;
