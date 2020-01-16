import React from 'react';
import Head from 'next/head';

const Layout = ({ title, description, children }) => (
  <div className="wrap">
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <link
        href="//fonts.googleapis.com/css?family=Roboto+Mono:400,400i,700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <main>{children}</main>
    <style jsx>{`
      .wrap {
        @apply .relative .min-h-screen;
      }
    `}</style>
  </div>
);

Layout.defaultProps = {
  title: 'ciccarel.li',
  description:
    'Full-stack web developer based in Miami, Florida. Freelancer, former Software Engineer at VICE, FYRE and Condé Nast',
};

export default Layout;
