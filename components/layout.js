import React from 'react';
import Head from 'next/head';
import { Footer } from './';

const Layout = ({ title, description, children }) => {
  return (
    <div className="relative min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: 'Michael Ciccarelli - Independent Creative Developer',
  description:
    'Software engineer, full-stack web developer, freelancer, based in Miami.',
};

export default Layout;
