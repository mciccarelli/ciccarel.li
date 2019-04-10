import { Intro } from '../components';

export default () => (
  <section className="profile">
    <div className="profile__overview">
      <img className="profile__overview__img" src="../static/mc.jpg" />
      <div className="profile__overview__text">
        <Intro />
        <p>
          I work with startups, creative agencies, and other teams, most often
          focusing on front-end web development; building, prototyping and
          implementing custom apps &amp; user interfaces, architecture,
          cloud-based hosting, as well as consulting on other improvements and
          workflows that I've picked up throughout my 15 years in developing
          software for the web.
        </p>
        <p>
          Currently accepting freelance work for 2019.
          <br />
          To inquire about a project, please send me{' '}
          <a href="mailto:m@ciccarel.li">an email</a>.
        </p>
        {/* <p>
          Whenever I'm not working, I like to play poker, travel, share thoughts
          on{` `}
          <a href="https://twitter.com/mciccarelli" target="_blank">
            Twitter
          </a>{' '}
          and photos on{' '}
          <a href="http://instagram.com/minorvillain" target="_blank">
            Instagram
          </a>
          .
        </p> */}
      </div>
    </div>
    <div className="profile__grid">
      <div className="profile__grid__col">
        <h5>Timeline</h5>
        <ul>
          <li>
            VICE Media (2014 - 2017)
            <span>Lead Front-end Engineer</span>
          </li>
          <li>
            Grey Group (2013 - 2014)
            <span>Web Developer</span>
          </li>
          <li>
            Condé Nast (2012 - 2013)
            <span>Front-end Web Developer</span>
          </li>
          <li>
            Consultant (2008 - )
            <span>Creative Technology &amp; Web Development</span>
          </li>
        </ul>
      </div>
      <div className="profile__grid__col">
        <h5>Technologies I use most often</h5>
        <p>
          JavaScript, Node, React, React Native, Vue, TypeScript, Webpack,
          GraphQL, HTML/CSS, Sketch, Next.js, Contentful, WordPress, Docker,
          Python, PHP, MySQL, PostgreSQL, MongoDB, D3.js, Highcharts.js,
          Firebase, Netlify, AWS, macOS &amp; iOS.
        </p>
        <h5>Brands I've worked with</h5>
        <p>
          VICE, Condé Nast, HBO, Grey, Cannon, Wired, Enigma, Style.com, BMW,
          M2M, Sonos, Converse, Wall Street Journal, Dow Jones, HuffPost, Knoll,
          FilzFelt, Pentagram, Live Nation, Elephant, Huge.
        </p>
      </div>
    </div>
    <style jsx>{`
      .profile {
        user-select: text;
        &__overview {
          lost-center: var(--maxWidth);
          position: relative;
          width: 100%;
          margin-bottom: 1.5rem;

          &__img {
            opacity: 0.2;
            max-width: 100%;
            margin-bottom: 1rem;
            pointer-events: none;
            @media (min-width: 600px) {
              position: absolute;
              z-index: -1;
              max-width: 300px;
              opacity: 0.2;
              right: 0;
              top: 0;
            }

            @media (min-width: 1000px) {
              max-width: 500px;
              opacity: 0.5;
            }
          }

          &__text {
            & p {
              margin-bottom: 2rem;
              @media (min-width: 600px) {
                padding-right: 150px;
              }

              @media (min-width: 1000px) {
                padding-right: 425px;
              }
            }
          }

          & p {
            font: 400 1rem/1.75 var(--fontFamilySansSerif);
          }
        }

        &__grid {
          & h5 {
            color: var(--darkGrey);
          }

          & p {
            font: 400 0.875rem/1.5 var(--fontFamilySansSerif);
            color: var(--darkGrey);
            margin: 0 0 2.2rem;
          }
        }

        & h5 {
          font: 400 0.875rem/1 var(--fontFamilyMono);
          text-transform: uppercase;
          margin-bottom: 0.9375rem;
        }

        & ul {
          margin: 0;
          padding: 0;
          list-style-type: none;

          & li {
            font: 400 14px/1.5 var(--fontFamilySansSerif);
            margin: 0 0 15px;
          }

          & span {
            display: block;
            color: var(--darkGrey);
          }
        }

        @media (min-width: 600px) {
          &__grid {
            lost-center: var(--maxWidth);
            position: relative;
            width: 100%;

            &__col {
              lost-column: 1/2;

              &:first-of-type {
                padding-right: 2.5rem;
                text-align: right;
              }
            }
          }
        }
      }
    `}</style>
  </section>
);
