import { Link } from 'gatsby';
import React from 'react'
import '../assets/scss/main.scss'

import Footer from './Footer'

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'is-loading'
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children, intl } = this.props

    return (
      <div className={`body ${this.state.loading}`}>
        <Link className='skip-nav-link' to="#main">
          {intl.formatMessage({ id: "skip-to-content" })}
        </Link>

        <div id="wrapper">
          {children}
          <Footer />
        </div>
      </div>
    )
  }
}

export default Template
