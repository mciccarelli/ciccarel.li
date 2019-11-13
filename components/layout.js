import React from "react";
import Head from "next/head";
import { Nav, Footer } from "../components";

const Layout = ({ title, description, children }) => (
  <div className="wrap">
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
    </Head>
    <Nav />
    <div className="grid"></div>
    <main>{children}</main>
    <Footer />
    <style jsx>{`
      .wrap {
        @apply .relative;
        transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
        background: theme("colors.smoke");
        color: theme("colors.black");
      }

      .wrap--dark {
        background: theme("colors.chocolate");
        color: theme("colors.dark-grey");
      }

      .wrap::before,
      .wrap::after {
        @apply .fixed .h-full .top-0;
        left: 25%;
        width: 1px;
        background: rgba(000, 000, 000, 0.05);
        content: " ";
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
        background: rgba(000, 000, 000, 0.05);
        content: " ";
      }
    `}</style>
  </div>
);

Layout.defaultProps = {
  title: "Michael Ciccarelli — Freelance developer",
  description:
    "Creative developer living in Miami, freelancer, former lead developer at VICE"
};

export default Layout;
