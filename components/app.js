import Head from 'next/head';
import '../static/style.css';

export default ({ children }) => (
  <div>
    <Head>
      <title>michael ciccarelli, freelance developer</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main>
      <div className="wrapper">
        {children}
        <aside>
          <div>brooklyn &harr; new orleans</div>
          {/* 29.94110040728807 -90.07188589546568 */}
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
          aside {
            position: fixed;
            top: 50%;
            left: 0;
            transform: translateY(-100%);
            display: none;
            @media (min-width: 800px) {
              display: block;
            }
            & div {
              transform: rotate(-90deg);
              transform-origin: center center;
            }
          }
        }
      `}</style>
    </main>
  </div>
);
