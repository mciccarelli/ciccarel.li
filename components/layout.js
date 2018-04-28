import Link from 'next/link'
import Head from 'next/head'
import { Header, Nav } from './'
import GlobalCSS from '../styles'

export default ({ children, title = 'michael ciccarelli', pathname = '/' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main>
      <Header />
      <Nav pathname={pathname} />
      {children}
    </main>
    <style jsx global>
      {GlobalCSS}
    </style>
    <style jsx>{`
      main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 0 2rem;
        min-height: 100vh;
        position: relative;
        overflow: hidden;
      }
    `}</style>
  </div>
)
