import React from 'react'
import styles from './styles.module.css'

export class StickyNav extends React.Component {
  constructor(props) {
    super(props)
  }
  listener = null
  state = {
    nav: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (window.pageYOffset > this.props.length) {
      if (!this.state.nav) {
        this.setState({ nav: true })
      }
    } else {
      if (this.state.nav) {
        this.setState({ nav: false })
      }
    }
  }

  render() {
      console.log(this.props);
    return (
      <div>
        <div className={`nav ${this.state.nav && 'scrollNav'}`}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
