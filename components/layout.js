import React from 'react';
import Head from 'next/head';
import { Nav } from './';

const Layout = ({ title, description, children }) => (
  <div className="wrap relative min-h-screen pt-16 md:pt-32">
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
    </Head>
    <Nav />
    <main>{children}</main>
  </div>
);

Layout.defaultProps = {
  title: 'michael ciccarelli',
  description:
    'Creative developer based in Miami, consultant, former engineering manager at VICE, FYRE and Condé Nast.',
};

export default Layout;
