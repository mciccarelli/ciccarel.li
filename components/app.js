import Head from 'next/head';
import '../static/style.css';

export default ({ children }) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      {/* <link rel="icon" href="/static/favicon.ico" /> */}
      <meta
        name="description"
        content="michael ciccarelli is a software engineer, web/ui designer, and independant technology consultant based in miami, florida."
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>ciccarel.li</title>
    </Head>
    <main>
      <div className="wrapper">
        {children}
        <aside>
          <div>25° 47' 30.2208" N, 80° 11' 35.754" W</div>
          {/* <div>29° 56' 27.961" N, 90° 4' 18.789" W</div> */}
        </aside>
      </div>
      <style jsx>{`
        main {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          user-select: none;

          & .wrapper {
            align-self: stretch;
            padding: 0 var(--gutterSmall) 8.25rem;
            @media (min-width: 600px) {
              padding: 0 var(--gutterMedium) 0;
            }
            @media (min-width: 800px) {
              padding: 0 15rem 0;
            }
          }
          aside {
            position: fixed;
            top: 50%;
            left: var(--gutterLarge);
            transform: translate(-50%, -50%);
            font: 400 0.875rem/1.5 var(--fontFamilyMono);
            text-transform: uppercase;
            display: none;
            @media (min-width: 800px) {
              display: block;
            }
            & div {
              transform: rotate(-90deg);
              transform-origin: center;
            }
            & span {
              transform: translateY(-1.5px);
              display: inline-flex;
            }
          }
        }
      `}</style>
    </main>
  </div>
);
