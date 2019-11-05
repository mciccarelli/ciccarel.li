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
    <div className="grid"> </div>
    <main>{children}</main>
    <Footer />
    <style jsx>{`
      .wrap {
        @apply .relative;
      }
      .wrap::before,
      .wrap::after {
        @apply .fixed .h-full .top-0;
        left: 25%;
        width: 1px;
        background: rgba(000, 000, 000, 0.1);
        content: ' ';
      }
      .wrap::after {
        left: auto;
        right: 25%;
      }
      .grid {
        @apply .fixed .h-full .top-0;
        left: 50%;
        transform: translateX(-50%);
        width: 1px;
        background: rgba(000, 000, 000, 0.1);
        content: ' ';
      }
    `}</style>
  </div>
);

Layout.defaultProps = {
  title: 'Michael Ciccarelli, freelance developer',
};

export default Layout;
