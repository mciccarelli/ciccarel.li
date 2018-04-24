import { PureComponent } from 'react'
import { Router } from '../routes'
import raf from 'raf'
import Main from './main'

Router.onRouteChangeStart = () => {
  const $container = document.getElementById('container')
  const $clone = $container.cloneNode(true)

  document.body.classList.add('loading')
  $clone.classList.add('clone')

  raf(() => {
    $container.parentNode.insertBefore($clone, $container.nextSibling)
    $clone.classList.add('animate-out')
    $container.classList.add('animate-in')
  })

  $clone.addEventListener(
    'animationend',
    () => {
      document.body.classList.remove('loading')
      $container.classList.remove('animate-in')
      $clone.parentNode.removeChild($clone)
    },
    { once: true }
  )
}

export default class Index extends PureComponent {
  static async getInitialProps({ query }) {
    const pathname = query.slug || '/'
    return { pathname }
  }

  render() {
    return <Main {...this.props} />
  }
}
