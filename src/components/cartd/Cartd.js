import React, { Component } from 'react'
import './cartd.css'
import Logo from './images/jiarucheren_03.jpg'
import Logo1 from './images/jiaruyaoshi_03.jpg'





class Cartd extends Component {
  render () {
    return (
  <div className="cartd">
    <div className="section_on clearfix">
      <div className="top">
				<div className="hed clearfix">
					<h1>已成功加入购物车！</h1>
				</div>
				<div className="shangpin clearfix">
					<img src={Logo} alt="Logo" />
          <h2>龙之谷六周年限定礼包大Boss冰龙款男士T恤</h2>
          <div className="guige">
            <span>款式：iPhone 5</span>
            <span>尺码：XL</span>
            <span>数量：xl</span>
          </div>
          <a href="gouwuche.html">去购物车结算</a>
          <a href="index.html">返回</a>
        </div>
        <div className="xiabian clearfix">
          <span>您可能还需要</span>
          <span></span>
          <div className="clearfix">
            <img src={Logo1} alt="Logo1" />
            <div className="clearfix">
              <span>龙之谷六周年限定礼包
                <br></br>大Boss冰龙款...</span>
              <span>￥88.00</span>
              <a href="#"></a>
            </div>
          </div>
          <div className="clearfix">
            <img src={Logo1} alt="Logo1"/>
            <div className="clearfix">
              <span>龙之谷六周年限定礼包
                <br></br>大Boss冰龙款...</span>
              <span>￥88.00</span>
              <a href="#"></a>
            </div>
          </div>
          <div className="clearfix">
            <img src={Logo1} alt="Logo1" />
            <div className="clearfix">
              <span>龙之谷六周年限定礼包
                <br></br>大Boss冰龙款...</span>
              <span>￥88.00</span>
              <a href="#"></a>
            </div>
          </div>
          <div className="clearfix">
            <img src={Logo1} alt="Logo" />
            <div className="clearfix">
              <span>龙之谷六周年限定礼包
                <br></br>大Boss冰龙款...</span>
              <span>￥88.00</span>
              <a href="#"></a>
            </div>
          </div>
          <div className="clearfix">
            <img src={Logo1} alt="Log01" />
            <div className="clearfix">
              <span>龙之谷六周年限定礼包
                <br></br>大Boss冰龙款...</span>
              <span>￥88.00</span>
              <a href="#"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
          )
  }
}

export default Cartd
