import { Component } from 'react';
import projects from '../static/projects.json';

// formating numbers
// ex: turn 1, 2 into 01, 02
const padNumber = (num, size) => {
  let s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
};

export default class Work extends Component {
  static async getInitialProps({ pathname }) {
    const projectList = await projects.data.slice().reverse();
    return { pathname, projectList };
  }

  render() {
    const { projectList } = this.props;
    if (!projectList || projectList.length < 1) return <p>loading...</p>;
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
            * Projects listed in reverse chronological order from 2012 - 2018.
            In most cases, I would have filled the role of a front-end developer
            but am used to wearing many hats both while freelancing, as well as
            working on my own self-initiated projects. If you'd like to learn
            more or to discuss a project,{' '}
            <a href="mailto:m@ciccarel.li">drop me an email</a> and I'll get
            back to you as soon as possible.
          </p>
        </div>
        <style jsx>{`
          section {
            lost-center: var(--maxWidth);
            padding-top: 10rem;
            width: 100%;

            & h5 {
              font: 400 0.875rem/1.25rem var(--fontFamilyMono);
              text-transform: uppercase;
              color: var(--dark_grey);
            }

            & p {
              font: 400 0.875rem/1.5 var(--fontFamilySansSerif);
              color: var(--darkGrey);
              text-transform: none;
              max-width: 570px;
              margin: 0;
            }

            .plist {
              list-style-type: none;
              margin: 0 0 1.5rem;
              padding: 0;
              &__item {
                text-align: left;
                position: relative;
                margin-bottom: 1rem;

                &:last-of-type {
                  margin-bottom: 0;
                }

                &__number {
                  font: 400 0.75rem/1.25rem var(--fontFamilySansSerif);
                  position: absolute;
                  top: 10px;
                  left: -40px;
                  color: var(--darkGrey);
                  display: none;
                  @media (min-width: 800px) {
                    display: block;
                  }
                }

                &__title {
                  font: 700 1.5rem/1 var(--fontFamilySansSerif);
                  text-transform: uppercase;
                  display: inline-block;
                  position: relative;
                  text-decoration: none;
                  transition: 0.4s;

                  @media (min-width: 600px) {
                    font-size: 2rem;
                  }

                  @media (min-width: 800px) {
                    font-size: 3rem;
                  }

                  @media (min-width: 1000px) {
                    font-size: 4rem;
                  }

                  &::before {
                    @media (min-width: 600px) {
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
                  }

                  &::after {
                    @media (min-width: 600px) {
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
                      /*transition: width  var(--transitionSpeed) ease;*/
                      transition: width var(--transitionSpeed)
                        cubic-bezier(0.77, 0, 0.175, 1);
                    }
                  }

                  &:hover {
                    color: var(--dark_grey);

                    &::before {
                      @media (min-width: 600px) {
                        width: 100%;
                        background: var(--accent);
                        /*transition: width var(--transitionSpeed) ease;*/
                        transition: width var(--transitionSpeed)
                          cubic-bezier(0.77, 0, 0.175, 1);
                      }
                    }

                    &::after {
                      @media (min-width: 600px) {
                        width: 100%;
                        background: transparent;
                        transition: all 0s ease;
                      }
                    }

                    & span {
                      opacity: 1;
                    }
                  }

                  & span {
                    font: 600 0.625rem/1.75 var(--fontFamilySansSerif);
                    color: var(--darkGrey);
                    text-transform: none;
                    display: block;
                    @media (min-width: 600px) {
                      white-space: nowrap;
                      font-weight: 700;
                      text-transform: uppercase;
                      line-height: 30px;
                      letter-spacing: 0.125rem;
                      color: var(--white);
                      position: absolute;
                      top: 50%;
                      left: 10px;
                      z-index: 1;
                      transform: translateY(-42%);
                      transition: all var(--transitionSpeed) ease;
                      opacity: 0;
                    }
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
    );
  }
}
