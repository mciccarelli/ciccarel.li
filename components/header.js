import { withRouter } from 'next/router'
import { Logo } from './'

const Header = ({ router: { pathname } }) => (
  <header className="header">
    <Logo />
    <h1
      className={`header__text ${
        pathname === '/' ? '' : 'header__text--hidden'
      }`}
    >
      hi, i'm michael ciccarelli, a freelance <span>web developer</span> based
      in brooklyn, new york.
    </h1>
    <style jsx>{`
      .header {
        padding: 5rem;
        position: absolute;
        top: 0;
        right: 0;

        &__text {
          max-width: 400px;
          text-align: right;
          font-size: 1.375rem;
          font-weight: 200;
          margin: 0;
          transition: opacity var(--transition_speed) ease-in-out;

          &--hidden {
            opacity: 0;
          }

          & span {
            color: var(--accent);
          }
        }
      }
    `}</style>
  </header>
)

export default withRouter(Header)
