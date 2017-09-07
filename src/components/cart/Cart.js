import React, { Component } from 'react'
import './cart.css'
import Logo from './images/gouwuren_07.jpg'
import Logo1 from './images/gouwuchekong_03.jpg'



class Cart extends Component {
  render () {
    return (
      <div className="cart">
        <div className="section_on clearfix">
          <div className="top">
            <div className="hed clearfix">
              <h1>购物车 <span className="zongshu">[<span>99</span>件]</span></h1>
              <span>付款，购买成功</span>
              <span>填写订单</span>
              <span>购物车</span>
            </div>
          </div>
          <div className="shang clearfix">
            <div className="quanxuan bcg"></div>
            <span>全选</span>
            <span>商品</span>
            <span>操作</span>
            <span>小计</span>
            <span>数量</span>
            <span>单价</span>
          </div>
          <ul className="shangpin">
            <li className="clearfix">
              <div className="bcg"></div>
              <img src={Logo} alt="Logo"/>
              <div>
                <a href="#">龙之谷六周年限定礼包大Boss冰龙款男士T恤</a>
                <span>款式：iPhone 5</span>
                <span>尺码：XL</span>
              </div>
              <a className="clear" href="javascript:void(0);">×</a>
              <span>￥<span className="zongjia">79</span>.00</span>
              <a className="jian" href="javascript:void(0);">-</a>
              <span className="shuliang">1</span>
              <a className="jia" href="javascript:void(0);">+</a>
              <span className="danjia">￥79.00</span>
              <div className="clearb clearfix">
                <a className="clearc" href="javascript:void(0);">不删除</a>
                <a className="clearcc" href="javascript:void(0);">确定删除</a>
              </div>
            </li>
            <li className="clearfix">
              <div className="bcg"></div>
              <img src={Logo} alt="Logo"/>
              <div>
                <a href="#">龙之谷六周年限定礼包大Boss冰龙款男士T恤</a>
                <span>款式：iPhone 5</span>
                <span>尺码：XL</span>
              </div>
              <a className="clear" href="javascript:void(0);">×</a>
              <span>￥<span className="zongjia">79</span>.00</span>
              <a className="jian" href="javascript:void(0);">-</a>
              <span className="shuliang">1</span>
              <a className="jia" href="javascript:void(0);">+</a>
              <span className="danjia">￥79.00</span>
              <div className="clearb clearfix">
                <a className="clearc" href="javascript:void(0);">不删除</a>
                <a className="clearcc" href="javascript:void(0);">确定删除</a>
              </div>
            </li>
            <li className="clearfix">
              <div className="bcg"></div>
              <img src={Logo} alt="Logo"/>
              <div>
                <a href="#">龙之谷六周年限定礼包大Boss冰龙款男士T恤</a>
                <span>款式：iPhone 5</span>
                <span>尺码：XL</span>
              </div>
              <a className="clear" href="javascript:void(0);">×</a>
              <span>￥<span className="zongjia">79</span>.00</span>
              <a className="jian" href="javascript:void(0);">-</a>
              <span className="shuliang">1</span>
              <a className="jia" href="javascript:void(0);">+</a>
              <span className="danjia">￥79.00</span>
              <div className="clearb clearfix">
                <a className="clearc" href="javascript:void(0);">不删除</a>
                <a className="clearcc" href="javascript:void(0);">确定删除</a>
              </div>
            </li>
          </ul>
          <div className="xia">
            <div className="qx bcg"></div>
            <span>全选</span>
            <span><a className="shanchu" href="javascript:void(0);">删除</a></span>
            <span>共 <span className="zsl">4</span> 件商品，已选择 <span className="xzsl">1</span> 件</span>
            <span>合计：<b>￥<span>79</span>.00</b></span>
            <div className="clearb clearfix">
              <a className="clearc" href="javascript:void(0);">不删除</a>
              <a className="clearcc" href="javascript:void(0);">确定删除</a>
            </div>
          </div>
          <a className="qujiesuan" href="tijiaodingdan.html">去结算</a>
        </div>
        <div className="wukong">
          <div className="section_on clearfix">
            <div className="top">
              <div className="hed clearfix">
                <h1>购物车 <span className="zongshu">[<span>99</span>件]</span></h1>
                <span>付款，购买成功</span>
                <span>填写订单</span>
                <span>购物车</span>
              </div>
              <img src={Logo1} alt="Logo1" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cart
