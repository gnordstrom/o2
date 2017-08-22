import React, { Component } from 'react'

import './FeaturedSales.css'

import a from './assets/1.jpg'
import b from './assets/2.jpg'
import c from './assets/3.jpg'
import d from './assets/4.jpg'
import e from './assets/5.jpg'
import f from './assets/6.jpg'

class FeaturedSales extends Component {
  render() {
    return (
      <div className="fs-wrapper bg-gray">
        <div className="fs-header">
          Shop our Featured Sales
        </div>

        <div className="fs-card bg-white">
          <a href="#" className="fs-card-link">
            <div className="fs-card-left">
              <strong>Up to Extra 15% Off</strong>
              <br /> 
              Furniture*&nbsp;›
            </div>
            <div className="fs-card-right">
              <img src={a} />
            </div>
          </a>
        </div>
        
        <div className="fs-card bg-white">
        <a href="#" className="fs-card-link">
            <div className="fs-card-left">
              <strong>Up to Extra 20% Off</strong>
              <br /> 
              Area Rugs*&nbsp;›
            </div>
            <div className="fs-card-right">
              <img src={b} />
            </div>
          </a>
        </div>
        
        <div className="fs-card bg-white">
        <a href="#" className="fs-card-link">
            <div className="fs-card-left">
              <strong>Up to Extra 20% Off</strong>
              <br /> 
              Home Decor*&nbsp;›
            </div>
            <div className="fs-card-right">
              <img src={c} />
            </div>
          </a>
        </div>
        <div className="fs-card bg-white">
          <a href="#" className="fs-card-link">
            <div className="fs-card-left">
              <strong>Up to Extra 15% Off</strong>
              <br /> 
              Bedding & Bath*&nbsp;›
            </div>
            <div className="fs-card-right">
              <img src={d} />
            </div>
          </a>
        </div>
        
        <div className="fs-card bg-white">
        <a href="#" className="fs-card-link">
            <div className="fs-card-left">
              <strong>Up to Extra 15% Off</strong>
              <br /> 
              Mattresses & Memory Foam*&nbsp;›
            </div>
            <div className="fs-card-right">
              <img src={e} />
            </div>
          </a>
        </div>
        
        <div className="fs-card bg-white">
        <a href="#" className="fs-card-link">
            <div className="fs-card-left">
              <strong>Up to Extra 15% Off</strong>
              <br /> 
              Garden & Patio*&nbsp;›
            </div>
            <div className="fs-card-right">
              <img src={f} />
            </div>
          </a>
        </div>


      </div>
    );
  }
}

export default FeaturedSales