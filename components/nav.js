import Link from 'next/link';
import { withRouter } from 'next/router';

const socialLinks = [
  { text: 'twitter', url: 'https://twitter.com/mciccarelli' },
  { text: 'linkedin', url: 'http://linkedin.com/in/mciccarelli' },
  { text: 'instagram', url: 'http://instagram.com/minorvillain' },
  { text: 'github', url: 'https://github.com/mciccarelli' },
];

const menuItems = [
  { text: 'index', pathname: '/' },
  { text: 'work', pathname: '/work' },
  { text: 'profile', pathname: '/profile' },
];

const Nav = ({ router: { pathname } }) => (
  <nav className="nav">
    <ul className="nav__social">
      {socialLinks.map((item, index) => (
        <li key={`social-link-${index}`}>
          <a href={item.url} target="_blank">
            {item.text}
          </a>
        </li>
      ))}
    </ul>
    <ul className="nav__menu">
      {menuItems.map((item, index) => (
        <li key={`menu-item-${index}`}>
          <Link prefetch href={item.pathname}>
            <a className={pathname === item.pathname ? 'active' : ''}>
              {item.text}
            </a>
          </Link>
        </li>
      ))}
      <li>
        <a href="mailto:m@ciccarel.li" className="email">
          contact
        </a>
      </li>
    </ul>
    <style jsx>{`
      .nav {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        pointer-events: none;
        padding: var(--gutterSmall);
        background: var(--white);
        z-index: 1;

        @media (min-width: 600px) {
          background: none;
          padding: var(--gutterMedium);
        }

        @media (min-width: 800px) {
          padding: var(--gutterLarge);
        }

        & ul {
          margin: 0;
          padding: 0;
          list-style-type: none;
          max-width: 250px;
        }

        &__menu {
          text-align: right;
        }

        a {
          display: inline-block;
          position: relative;
          text-decoration: none;
          text-transform: uppercase;
          color: var(--black);
          pointer-events: all;

          &:after {
            display: block;
            bottom: 2px;
            left: 0;
            width: 1px;
            height: 1px;
            position: absolute;
            content: '';
            background: var(--darkGrey);
            filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=0);
            opacity: 0;
            transition: width 0.3s cubic-bezier(0.77, 0, 0.175, 1),
              opacity 0.1s linear 0.3s;
          }

          &:hover,
          &:active {
            &:after {
              width: 100%;
              opacity: 1;
              filter: progid: DXImageTransform.Microsoft.Alpha(enabled=false);
              transition-delay: 0s;
            }
          }

          &.active::before {
            display: inline-block;
            content: '';
            position: absolute;
            top: 50%;
            left: -10px;
            height: 4px;
            width: 4px;
            transform: translateY(-60%);
            background-color: var(--accent);
            border-radius: 50%;
          }

          &.email {
            color: var(--accent);
          }
        }
      }
    `}</style>
  </nav>
);

export default withRouter(Nav);
