import App, { Container } from 'next/app'
import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Layout } from '../components'

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Layout>
          <TransitionGroup>
            <CSSTransition
              key={this.props.router.route}
              classNames="fade"
              timeout={200}
            >
              <Component {...pageProps} />
            </CSSTransition>
          </TransitionGroup>
        </Layout>
        <style jsx global>{`
          .fade-enter {
            opacity: 0;
          }

          .fade-enter-active {
            opacity: 1;
            transition: opacity var(--transition_speed);
          }

          .fade-exit-active {
            opacity: 0;
            transition: opacity var(--transition_speed);
          }
        `}</style>
      </Container>
    )
  }
}
