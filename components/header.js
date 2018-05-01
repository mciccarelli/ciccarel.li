import { withRouter } from 'next/router'
import { Intro, Logo } from './'

const Header = ({ router: { pathname } }) => (
  <header className="header">
    <Logo />
    <Intro hide={pathname !== '/'} />
    <style jsx>{`
      .header {
        padding: 5rem;
        position: absolute;
        top: 0;
        right: 0;
        text-align: right;
      }
    `}</style>
  </header>
)

export default withRouter(Header)
