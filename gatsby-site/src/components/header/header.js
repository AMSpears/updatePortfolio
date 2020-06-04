import PropTypes from "prop-types"
import {Link} from "gatsby"
import React, {Component} from "react"
import "./header.scss"

class Header extends Component {
  constructor() {
    super()
    this.menuItems = React.createRef()

    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }

  openNav() {
    const innerWidth = window.innerWidth
    const colors = ['#F76259', '#92F759', '#59F7E5', '#5985F7', '#DF5FFA']
    if (innerWidth < 768) {
      this.menuItems.current.style.width = '100%'
      this.menuItems.current.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    }
  }

  closeNav() {
    const innerWidth = window.innerWidth
    if (innerWidth < 768) {
      this.menuItems.current.style.width = '0%'
    }
  }

  render() {
    return (
      <header>
        <div className="nav-container">
          <div className="menu-icon" onClick={() => this.openNav()}>
            <div />
            <div />
            <div />
          </div>
          <div className="nav-links-overlay" ref={this.menuItems}>
            <a href="#" className="closebtn" onClick={() => this.closeNav()}>
              &times;
            </a>
            <div className="nav-links">
              <div>
                <Link to="/">Top</Link>
                <a href='#about-me'>About Me</a>
                <a href='#projects' >Projects</a>
                <a href="#medium">Medium</a>
                <a href="#resume">Resume</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}


Header.propTypes = {
  siteTitle: PropTypes.string

}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
