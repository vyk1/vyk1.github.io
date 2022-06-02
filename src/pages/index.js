import React from 'react'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'
import { injectIntl } from 'gatsby-plugin-intl'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'

import About from '../components/Index/About'
import Systems from '../components/Index/Systems'
import Techknowledge from '../components/Index/Techknowledge'
import Education from '../components/Index/Education'
import Certifications from '../components/Index/Certifications'

import vbm from '../assets/images/vbm.jpg';

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    const { intl } = this.props
    return (
      <Layout intl={intl}>
        <Helmet>
          <title>
            {intl.formatMessage({ id: "index-title" })}
          </title>
          <meta name="robots" content="index, follow" />
          <meta name="description" content={intl.formatMessage({ id: "description" })} />
          <meta name="author" content="Victoria Botelho Martins" />
          <meta name="keywords" content="Victoria Botelho Martins, Desenvolvedora Web, Software, Unfold Software Development, portfolio, projetos, sistemas, Victoria, Botelho, Martins, dev, web dev, fullstack, Sistemas" />
          <meta name="image" content={vbm} />
        </Helmet>

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} intl={intl} />

        <div id="main">
          <About intl={intl} />
          <Techknowledge intl={intl} />
          <Education intl={intl} />
          <Certifications intl={intl} />
          <Systems intl={intl} />
        </div>

      </Layout >
    )
  }
}

export default injectIntl(Index)
