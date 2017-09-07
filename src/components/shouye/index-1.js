import React, { Component } from 'react'
import './index-1.css'
import Logo from './images/1.jpg'
import Logo1 from './images/2.jpg'
import Logo2 from './images/3.jpg'
import Logo3 from './images/yushou_03.png'
import Logo4 from './images/ditu_07.jpg'
import Logo5 from './images/bichu_07.jpg'


class Main extends Component {
  state = {
    count:0
  }
  handleClick=()=>{
    this.setState({
      count:this.state.count + 1
    })
  }
  handleClick1=()=>{
    this.setState({
      count:this.state.count - 1
    })
  }
  render () {
    return (
    <div className="main">
      <div className="wrap">
        <div className="swiper-container">
          <div className="swiper-wrapper clearfix">
            <div className="swiper-slide"><img src={Logo} alt="Logo"/></div>
            <div className="swiper-slide"><img src={Logo1} alt="Logo"/></div>
            <div className="swiper-slide"><img src={Logo2} alt="Logo"/></div>
          </div>
        </div>
        <div className="swiper-button-prev swiper-button-white"></div>
        <div className="swiper-button-next swiper-button-white"></div>
      </div>

      <section className="clearfix">
        <aside className="clearfix">
          <img src={Logo3} alt="Logo"/>
          <h1>龙之谷六周年限定礼包大Boss冰龙款男士T恤</h1>
          <div className="daojishi">
            <span>距离预售结束</span>
            <div className="jishi">
              <span><span className="day">00</span> </span>:
              <span><span className="hour">15</span> </span>:
              <span><span className="minutes">35</span> </span>:
              <span><span className="seconds">55</span> </span>
              <i>天</i>
              <i>时</i>
              <i>分</i>
              <i>秒</i>
            </div>
            <span>
              <span>注</span>：商品将于<span>2016/10/5</span>统一发货!</span>
          </div>
        </aside>
        <article className="clearfix">
          <div className="dingjin clearfix">
            <span>定金</span>
            <b>￥ <b>500.00</b></b><br></br>
            <span>全款金额：￥150.00</span>
          </div>
          <div className="kuanshi clearfix">
            <span>款式</span>
            <a href="#">iphone 5</a>
            <a href="#">iphone 6</a>
            <a href="#">iphone 6+</a>
          </div>
          <div className="chima clearfix">
            <span>尺码</span>
            <a href="#">XXS</a>
            <a href="#">XS</a>
            <a href="#">S</a>
            <a href="#">M</a>
            <a href="#">L</a>
            <a href="#">XL</a>
            <a href="#">XXL</a>
          </div>
          <div className="shuliang clearfix">
            <span>数量</span>
            <div className="jian" href="#" onclick={this.handleClick}>-</div>
            <span className="shu">{this.state.count}</span>
            <div className="jia" href="#" onclick={this.handleClick1}>+</div>
          </div>
        </article>
        <div className="anniu">
          <a className="yuding" href="jiarugouwuche.html">立即预定</a>
        </div>
        <div className="bichu">
          <img className="ditu" src={Logo4} alt="Logo"/>
          <img className="buchuc" src={Logo5} alt="Logo"/>
        </div>
      </section>
    </div>

      )
  }
}

export default Main
