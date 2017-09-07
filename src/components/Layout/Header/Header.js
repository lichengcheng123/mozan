import React, { Component } from 'react'
import './header.css'
import Logo from './images/men_08.jpg'
import Logo1 from './images/logo_03.png'
import Logo2 from './images/fsangdajing_03.jpg'
import Logo3 from './images/shop_03.jpg'

class Header extends Component {
  render () {
    return (
        <div className="header">
          <div className="top_on clearfix">
            <a href="#"><img src={Logo} alt="Logo"/></a>
            <a href="#"><img src={Logo1} alt="Logo"/></a>
            <div className="denglu">
              <img src={Logo2} alt="Logo"/>
              <img src={Logo3} alt="Logo"/>
              <a href="#">登录 </a>/
              <a href="#">注册</a>
            </div>
          </div>

        </div>
    )
  }
}

export default Header
