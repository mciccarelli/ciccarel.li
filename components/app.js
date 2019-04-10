import Head from 'next/head';
import '../static/style.css';

export default ({ children }) => (
  <div>
    <Head>
      <title>michael ciccarelli -- freelance developer</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main>
      <div className="wrapper">
        {children}
        <aside>
          <div>
            brooklyn <span>&harr;</span> nola
          </div>
          {/* <div>29.94110040728807, -90.07188589546568</div> */}
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
            transform: translate(-5%, -50%);
            font: 400 0.875rem/1.5 var(--fontFamilyMono);
            text-transform: uppercase;
            display: none;
            @media (min-width: 800px) {
              display: block;
            }
            & div {
              transform: rotate(-90deg);
              transform-origin: top left;
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
