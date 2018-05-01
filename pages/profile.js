export default () => (
  <div className="profile">
    <div className="profile__overview">
      <img className="profile__overview__img" src="../static/mc.jpg" />
      <div className="profile__overview__text">
        <h2>
          hi, i'm michael ciccarelli, a freelance <span>web developer</span>{' '}
          based in brooklyn, new york.
        </h2>
        <p>
          Over the past 10+ years, I've worked with startups, creative agencies,
          and global media companies, with a focus on front-end development;
          building, prototyping and implementing user interfaces that are usable
          and scalable for any web-based platform.
        </p>
        <p>
          Whenever I'm not busy with client work or{' '}
          <a href="https://github.com/mciccarelli" target="_blank">
            experimenting
          </a>{' '}
          and trying out new technologies on my own self-initiated projects, I
          enjoy playing poker, collecting sneakers, sharing thoughts on{' '}
          <a href="https://twitter.com/mciccarelli" target="_blank">
            Twitter
          </a>{' '}
          and photos on{' '}
          <a href="http://instagram.com/minorvillain" target="_blank">
            Instagram
          </a>.
        </p>
      </div>
    </div>
    <div className="profile__grid">
      <div className="profile__grid__column">
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
            Consultant (2008 - current)
            <span>Creative Technology &amp; Web Development</span>
          </li>
        </ul>
      </div>
      <div className="profile__grid__column">
        <h5>Tools I use most often</h5>
        <p>
          JavaScript, ES6, Node, React, Redux, React Native, Vue.js, Angular,
          TypeScript, Webpack, Browserify, REST API, GraphQL, Styled Components,
          HTML/CSS, PostCSS, Sketch, Gatsby.js, Next.js, Contentful, WordPress,
          Python, PHP, MySQL, PostgreSQL, SQLite, MongoDB, D3.js, Highcharts.js,
          Firebase, Netlify, AWS, macOS &amp; iOS.
        </p>
      </div>
      <div className="profile__grid__column">
        <h5>Brands I've worked with</h5>
        <p>
          VICE, Viceland, Conde Nast, HBO, Grey, Fyre, Cannon, Kraft, Wired,
          Enigma, Style.com, BMW, M2M, Sonos, Converse, Wall Street Journal, Dow
          Jones, HuffPost, Knoll, FilzFelt, Pentagram, Live Nation, Elephant,
          Huge.
        </p>
      </div>
    </div>
    <style jsx>{`
      .profile {
        &__overview {
          lost-center: var(--max_width);
          position: relative;
          width: 100%;
          margin-bottom: 1.5rem;

          &__img {
            opacity: 0.5;
            max-width: 100%;
            margin-bottom: 1rem;
            pointer-events: none;
            @media (min-width: 600px) {
              position: absolute;
              max-width: 490px;
              right: 0;
              top: 0;
            }
          }

          &__text {
            max-width: var(--max_width);
            & p {
              max-width: var(--max_width);
              padding-right: 425px;
              margin-bottom: 2rem;
            }
          }

          & p {
            font: 400 1rem/1.75 var(--font_family_sans_serif);
          }

          & a {
            border-bottom: 1px dotted var(--dark_grey);
          }
        }

        &__grid {
          lost-center: var(--max_width);
          position: relative;
          width: 100%;

          &__column {
            lost-column: 1/3;
          }

          &__timeline {
            lost-column: 1/2;
          }

          &__workedwith {
            lost-column: 1/2;
          }

          & h5 {
            color: var(--dark_grey);
          }

          & p {
            font: 400 0.875rem/1.5 var(--font_family_sans_serif);
            color: var(--dark_grey);
          }
        }

        & h2 {
          max-width: 400px;
          text-align: left;
          font-size: 1.375rem;
          font-weight: 200;
          margin: 0 0 2rem;

          span {
            color: var(--accent);
          }
        }

        & h5 {
          font: 400 0.875rem/1 var(--font_family_mono);
          text-transform: uppercase;
        }

        & ul {
          margin: 0;
          padding: 0;
          list-style-type: none;
          /*border-top: 1px solid #222;*/

          & li {
            border-bottom: 1px solid #222;
            padding: 0.625rem 0;
            font: 400 14px/1.5 var(--font_family_sans_serif);
          }

          & span {
            display: block;
            color: var(--dark_grey);
          }
        }
      }
    `}</style>
  </div>
)
