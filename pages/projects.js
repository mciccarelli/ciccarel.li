import { Component } from 'react'
import projects from '../static/projects.json'

// formating numbers
// ex: turn 1, 2 into 01, 02
const padNumber = (num, size) => {
  let s = num + ''
  while (s.length < size) s = '0' + s
  return s
}

export default class Projects extends Component {
  static async getInitialProps({ pathname }) {
    const projectList = await projects.data.slice().reverse()
    return { pathname, projectList }
  }

  render() {
    const { projectList } = this.props
    if (!projectList || projectList.length < 1) return <p>loading...</p>
    return (
      <section>
        <h5>Projects</h5>
        <ol className="plist">
          {projectList.map((item, index) => (
            <li className="plist__item" key={`project-${index}`}>
              <div className="plist__item__number">
                {padNumber(index + 1, 2)}
              </div>
              <a className="plist__item__title" href={item.url} target="_blank">
                {item.title}
                <span>{item.info}</span>
              </a>
            </li>
          ))}
        </ol>
        <div className="details">
          <p>
            * Projects listed in reverse chronological order ranging from 2012 -
            2018. Most often I would of filled the role of a front-end developer
            but am used to wearing many hats both while working with clients, as
            well as my own self-initiated projects. If you'd like to learn more
            or to discuss a project,{' '}
            <a href="mailto:m@ciccarel.li">send me an email</a> and I'll get
            back to you as soon as possible.
          </p>
        </div>
        <style jsx>{`
          section {
            lost-center: var(--max_width);
            padding-top: 10rem;
            width: 100%;

            & h5 {
              font: 400 0.875rem/1.25rem var(--font_family_mono);
              text-transform: uppercase;
              color: var(--dark_grey);
            }

            & p {
              font: 400 0.875rem/1.5 var(--font_family_sans_serif);
              color: var(--dark_grey);
              text-transform: none;
              max-width: 570px;
              margin: 0;

              & a {
                border-bottom: 1px solid var(--accent);
              }
            }

            .plist {
              margin: 0;
              padding: 0;
              list-style-type: none;
              &__item {
                text-align: left;
                position: relative;
                margin-bottom: 1.5rem;

                &:last-of-type {
                  margin-bottom: 0;
                }

                &__number {
                  font: 400 0.75rem/1.25rem var(--font_family_sans_serif);
                  position: absolute;
                  top: 10px;
                  left: -40px;
                  color: var(--dark_grey);
                }

                &__title {
                  font: 700 4rem/1 var(--font_family_sans_serif);
                  text-transform: uppercase;
                  display: inline-block;
                  position: relative;
                  text-decoration: none;
                  transition: 0.4s;

                  &::before {
                    content: '';
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-40%);
                    height: 30px;
                    width: 0;
                    transition: width 0s ease,
                      background var(--transition_speed) ease;
                  }

                  &::after {
                    content: '';
                    content: '';
                    display: block;
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-40%);
                    height: 30px;
                    width: 0;
                    background: var(--accent);
                    /*transition: width  var(--transition_speed) ease;*/
                    transition: width var(--transition_speed)
                      cubic-bezier(0.77, 0, 0.175, 1);
                  }

                  &:hover {
                    color: var(--dark_grey);

                    &::before {
                      width: 100%;
                      background: var(--accent);
                      /*transition: width var(--transition_speed) ease;*/
                      transition: width var(--transition_speed)
                        cubic-bezier(0.77, 0, 0.175, 1);
                    }

                    &::after {
                      width: 100%;
                      background: transparent;
                      transition: all 0s ease;
                    }

                    & span {
                      opacity: 1;
                    }
                  }

                  & span {
                    font: 700 0.625rem/30px var(--font_family_sans_serif);
                    letter-spacing: 0.125rem;
                    color: var(--white);
                    text-transform: uppercase;
                    display: block;
                    position: absolute;
                    top: 50%;
                    left: 10px;
                    z-index: 1;
                    transform: translateY(-42%);
                    transition: all var(--transition_speed) ease;
                    opacity: 0;
                  }
                }
              }
            }

            .details {
              padding: 5rem 0;
            }
          }
        `}</style>
      </section>
    )
  }
}
