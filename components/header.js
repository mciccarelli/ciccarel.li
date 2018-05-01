import { withRouter } from 'next/router'
import { Intro, Logo } from './'

const Header = ({ router: { pathname } }) => (
  <header className="header">
    <Logo />
    <Intro hide={pathname !== '/'} />
    <style jsx>{`
      .header {
        @media (min-width: 600px) {
          padding: var(--gutterMedium);
          position: absolute;
          top: 0;
          right: 0;
          text-align: right;
        }
        @media (min-width: 800px) {
          padding: var(--gutterLarge);
        }
      }
    `}</style>
  </header>
)

export default withRouter(Header)
