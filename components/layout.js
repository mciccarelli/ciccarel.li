import { withRouter } from 'next/router'
import { App, Header, Nav } from './'

export default ({ children }) => (
  <App>
    <Header />
    <Nav />
    {children}
  </App>
)
