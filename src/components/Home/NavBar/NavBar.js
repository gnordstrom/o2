import React, { Component } from 'react'

import './NavBar.css'

import cart from './assets/cart.svg'
import glass from './assets/glass.svg'
import ham from './assets/ham.svg'
import logo from './assets/logo.svg'

class NavBar extends Component {
  render() {
    return (
      <div className="nav-wrapper">
        <div className="nav-grid">
          <div className="box a">
            <img src={ham}/>
          </div>
          <div className="box b">
            <img src={logo}/>

          </div>
          <div className="box c">
            <input type="text" placeholder="Search"/>
            <img src={glass}/>
          </div>
          <div className="box d">
            <img src={cart} />

          </div>
        </div>
      </div>
    );
  }
}

export default NavBar