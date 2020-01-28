import React, { useState } from 'react';
import { Nav, Menu } from './';
import Head from 'next/head';

const Layout = ({ title, description, children }) => {
  const [menuOpen, menuToggle] = useState(false);
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
      <Nav menuOpen={menuOpen} menuToggle={menuToggle} />
      {menuOpen && <Menu menuToggle={menuToggle} menuOpen={menuOpen} />}
      <main className="px-8 md:px-24 py-32">{children}</main>
      <style jsx>{`
        /* disable document scroll when menu is open */
        :global(body, html) {
          overflow: ${menuOpen ? 'hidden' : 'auto'};
        }
      `}</style>
    </div>
  );
};
Layout.defaultProps = {
  title: 'Michael Ciccarelli - Independent Creative Developer',
  description:
    'Freelance consultant based in Miami, FL. Specializing in full-stack web development with a focus on interactive and responsive content.',
};

export default Layout;
