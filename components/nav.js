import { withRouter } from 'next/router';
import { MenuIcon } from './';
import Link from 'next/link';
import cx from 'classnames';

const Nav = ({ router, menuOpen, menuToggle }) => (
  <nav className={cx('nav', { inverted: menuOpen })}>
    <div className="flex justify-between items-center p-8 ">
      <MenuIcon menuOpen={menuOpen} onClick={() => menuToggle(!menuOpen)} />
      <ul className="flex pr-1">
        <li>
          <Link href="/contact">
            <a className={cx({ active: router.pathname === '/contact' })}>
              <span>Hire Me</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
    <style jsx>{`
      .nav {
        @apply .fixed .left-0 .top-0 .z-40 .w-full;
      }

      .nav.inverted li a {
        @apply .text-white;
      }

      li a {
        @apply .font-mono .text-xs .font-normal .text-white .uppercase;
      }

      li a span {
        @apply .relative;
      }

      li a span::after {
        @apply .absolute;
        transition: width 0.2s ease-in-out 0.15s;
        background-color: transparent;
        content: '';
        left: 0;
        bottom: -4px;
        width: 0;
        height: 1px;
      }

      li a:hover span::after,
      li a:focus span::after,
      li a:active span::after,
      li a.active span::after {
        @apply .bg-purple-light;
        width: 40%;
      }
    `}</style>
  </nav>
);

export default withRouter(Nav);
