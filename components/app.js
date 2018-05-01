import Head from 'next/head'
import GlobalCSS from '../styles'

export default ({ children }) => (
  <div>
    <Head>
      <title>michael ciccarelli: freelance web developer based in nyc</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main>
      {children}
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
    </main>
  </div>
)
