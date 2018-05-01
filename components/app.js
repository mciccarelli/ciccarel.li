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
      <div className="wrapper">{children}</div>
      <style jsx global>
        {GlobalCSS}
      </style>
      <style jsx>{`
        main {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          min-height: 100vh;
          position: relative;
          overflow: hidden;

          & .wrapper {
            align-self: stretch;
            padding: 0 var(--gutterSmall) 8.25rem;
            @media (min-width: 600px) {
              padding: 0 var(--gutterMedium) 0;
              /*padding: 0 15rem;*/
            }
            @media (min-width: 800px) {
              /*padding: 0 var(--gutterLarge);*/
              padding: 0 15rem 0;
            }
          }
        }
      `}</style>
    </main>
  </div>
)
