import React, { useEffect } from 'react';
import Head from 'next/head';
import smoothscroll from 'smoothscroll-polyfill';

const Layout = ({ title, description, children }) => {
  useEffect(() => smoothscroll.polyfill(), []);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <main className="px-8 md:px-16">{children}</main>
    </div>
  );
};

Layout.defaultProps = {
  title: 'michael ciccarelli — creative developer',
  description:
    'software developer based in miami, consultant to early-stage technology companies, creative agencies, and global brands.',
};

export default Layout;
