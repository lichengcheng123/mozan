import React, { Component } from 'react'
import './index-1.css'
import Logo from './images/1.jpg'
import Logo1 from './images/2.jpg'
import Logo2 from './images/3.jpg'
import Logo3 from './images/yushou_03.png'
import Logo4 from './images/ditu_07.jpg'
import Logo5 from './images/bichu_07.jpg'
import Contdown from '../contdown/Contdown'

class Main extends Component {
  state ={
    count:0,
  activeIndex: 0,
  activeIndex2: 0,
  sizes: [
    {
      size: 'S'
    },
    {
      size: 'M'
    },
    {
      size: 'L'
    },
    {
      size: 'XL'
    },
    {
      size: 'XS'
    },
    {
      size: 'XXS'
    }
  ],
  names: [
    {
      name: 'iphone:5'
    },
    {
      name:'iphone:6'
    },
    {
      name:'iphone:6+'
    }
  ]
  }




handleClick2= (i) => {
  console.log(i)
  this.setState({
    activeIndex: i
  })
}
handleClick3= (i) => {
  console.log(i)
  this.setState({
    activeIndex2: i
  })
}


  handleClick=(event)=>{
    event.preventDefault()
    this.setState({
      count:this.state.count + 1
    })
  }
  handleClick1=(event)=>{
    event.preventDefault()
    this.setState({
      count:this.state.count - 1
    })
  }



  render () {

    const list = this.state.sizes.map((t, i) => (
    <div onClick={() => this.handleClick2(i)}
      className={`size ${this.state.activeIndex===i&& 'active'}`}
      key={i}>{t.size}</div>
    ))

    const list1 = this.state.names.map((t, i) => (
    <div onClick={() => this.handleClick3(i)}
      className={`name ${this.state.activeIndex2===i&& 'active'}`}
      key={i}>{t.name}</div>
    ))

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
              <span>
                <Contdown/>
              </span>
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

            <div className="a">
              {list1}
            </div>

          </div>
          <div className="chima clearfix">
            <span>尺码</span>
            <div className='c'>
              {list}
            </div>
          </div>
          <div className="shuliang clearfix">
            <span>数量</span>
            <a className="jian" href="#" onClick={this.handleClick1}>-</a>
            <span className="shu">{this.state.count}</span>
            <a className="jia" href="#" onClick={this.handleClick}>+</a>
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
