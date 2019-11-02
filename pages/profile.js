import { Intro } from '../components';

export default () => (
  <section className="profile">
    <div className="profile__overview">
      <img className="profile__overview__img" src="../static/mc.jpg" />
      <div className="profile__overview__text">
        <Intro />
        <p>
          I am a creative technologist who has been
          building software and custom user experiences for 20+ years.
        </p>
        <p>
          I've held various staff engineering roles, as well as worked as a consultant with startups, 
          creative agencies, media companies, and global brands. Providing technical services from building custom apps &amp;
          user interfaces, to setting up application architecture, hosting,
          cloud-based infrastructures, to product team methodologies and
          workflows.
        </p>
        <p>
          Now, I work as remote contractor, focusing on full-stack (javascript) web application development and UI/UX design.
          <br />
          To inquire about a project, please send me <a href="mailto:m@ciccarel.li">an email</a>
          .
        </p>
      </div>
    </div>
    <div className="profile__grid">
      <div className="profile__grid__col">
        <h5>Timeline</h5>
        <ul>
          <li>
            VICE (2014 - 2017)
            <span>Lead Engineer</span>
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
            Freelance (2008 - )
            <span>Web application development</span>
          </li>
        </ul>
      </div>
      <div className="profile__grid__col">
        <h5>Technologies I use most often</h5>
        <p>
          JavaScript, Node, React, Vue, REST, GraphQL, HTML/CSS, Framer X + Framer Motion, Sketch,
          Contentful, Docker, D3.js, AWS, macOS &amp; iOS.
        </p>
        <h5>Brands I've worked with</h5>
        <p>
          VICE, Condé Nast, HBO, Grey, Cannon, Wired, Enigma, Style.com, BMW,
          M2M, Sonos, Converse, Wall Street Journal, Common, Dow Jones, HuffPost, Knoll,
          Pentagram, Live Nation, Huge.
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
