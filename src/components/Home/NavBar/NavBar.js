import React, { Component } from 'react'

import './NavBar.css'

import cart from './assets/cart.svg'
import glass from './assets/glass.svg'
import ham from './assets/ham.svg'
import logo from './assets/logo.svg'
import logoWords from './assets/logo-words.svg'
import account from './assets/account.svg'
import review from './assets/review.svg'
import list from './assets/list.svg'

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
          <div className="box e">
            <img src={logoWords} />
          </div>
          <div className="box c">
            <input type="text" placeholder="Search"/>
            <span className="red-box">
              <img src={glass}/>
            </span>
            <span className="no-box">
              <img src={glass}/>
            </span>
          </div>

          <div className="box i">
            <span className="i-top">Get Paid to Shop</span>
            <span className="i-bottom">Start Earning</span>
          </div>

          <div className="box f">
            <img src={account}/>
            <label>Account</label>
          </div>
          <div className="box g">
            <img src={review}/>
            <label>Reviews</label>
          </div>
          <div className="box h">
            <img src={list}/>
            <label>Lists</label>
          </div>
          <div className="box d">
            <img src={cart} />
            <label className="hidden">Cart</label>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar