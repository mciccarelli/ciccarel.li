import Link from 'next/link';
import { withRouter } from 'next/router';
import cx from 'classnames';

const Nav = ({ router }) => (
  <nav className="nav">
    <div className="flex justify-start md:justify-end items-center p-8">
      <ul className="flex">
        <li className="mr-8">
          <Link href="/">
            <a className={cx({ active: router.pathname === '/' })}>
              <span>Info</span>
            </a>
          </Link>
        </li>
        <li className="mr-8">
          <Link href="/projects">
            <a className={cx({ active: router.pathname === '/projects' })}>
              <span>Projects</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={cx({ active: router.pathname === '/contact' })}>
              <span>Contact</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
    <style jsx>{`
      .nav {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 99;
        width: 100%;
      }

      li a {
        @apply .font-body .font-bold .text-xs .text-grey-light .uppercase .tracking-wider;
        border: 0;
      }

      li a span {
        position: relative;
      }

      li a span::after {
        position: absolute;
        transition: background-color 0.2s ease-in-out 0.15s,
          height 0.2s ease-in-out 0.15s;
        z-index: -1;
        content: '';
        left: -2px;
        bottom: 1px;
        width: calc(100% + 4px);
        height: 0;
        background-color: transparent;
      }

      li a:hover span::after,
      li a:focus span::after,
      li a:active span::after,
      li a.active span::after {
        height: 2px;
        background-color: theme('colors.purple-light');
      }
    `}</style>
  </nav>
);

export default withRouter(Nav);
