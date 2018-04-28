import Link from 'next/link'

const socialLinks = [
  { text: 'twitter', url: 'https://twitter.com/mciccarelli' },
  { text: 'linkedin', url: 'http://linkedin.com/in/mciccarelli' },
  { text: 'instagram', url: 'http://instagram.com/minorvillain' },
  { text: 'github', url: 'https://github.com/mciccarelli' }
]

const menuItems = [
  { text: 'index', pathname: '/' },
  { text: 'projects', pathname: '/projects' },
  { text: 'info', pathname: '/info' }
]

export default ({ pathname }) => (
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
          <Link href={item.pathname}>
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
        padding: 5rem;

        & ul {
          margin: 0;
          padding: 0;
          list-style-type: none;
          max-width: 250px;
        }

        &__menu {
          text-align: right;
        }

        & a {
          pointer-events: all;
          position: relative;
          &.active::before {
            position: absolute;
            top: 50%;
            left: -10px;
            height: 4px;
            width: 4px;
            transform: translateY(-60%);
            background-color: var(--accent);
            border-radius: 50%;
            display: inline-block;
            content: '';
          }
          &.email {
            color: var(--accent);
          }
        }
      }
    `}</style>
  </nav>
)
