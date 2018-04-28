import { PureComponent } from 'react'
import { Layout } from '../components'

export default class Info extends PureComponent {
  static async getInitialProps({ pathname }) {
    return { pathname }
  }

  render() {
    return (
      <Layout {...this.props}>
        <p>Projects</p>
      </Layout>
    )
  }
}
