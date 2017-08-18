import React, { Component } from 'react'

import NavBar from './NavBar/NavBar'
import TopCarousel from './TopCarousel/TopCarousel'
import FeaturedSales from './FeaturedSales/FeaturedSales'

import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <NavBar />
        <TopCarousel />
        <FeaturedSales />
      </div>
    );
  }
}

export default Home