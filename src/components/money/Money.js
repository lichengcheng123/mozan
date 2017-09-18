import React, { Component } from 'react'
import './money.css'
import Logo from './images/zhifubao_03.jpg'
import Logo1 from './images/xiaoduihao_11.jpg'
import Logo2 from './images/weixin_05.jpg'
import Logo3 from './images/weixinm_03.jpg'
import Logo4 from './images/weixinshouji_03.jpg'
import Logo5 from './images/xiuchengzhengguo_03.jpg'
import fangshi from './fangshi.svg'
import fangwei from './fangwei.svg'
import {Link} from 'react-router-dom'

class Money extends Component {
  render () {
    return (
  <div className="money">
    <div className="section_on clearfix">
      <div className="top">
				<div className="hed clearfix">
					<h1>收银台</h1>
					<span>付款，购买成功</span>
					<span>填写订单</span>
					<span>购物车</span>
				</div>
			</div>
			<div className="zhongjian clearfix">
        <span>订单提交成功，请您尽快付款！</span><br></br>
        <span>请您在提交订单后<span>24小时</span>内完成支付，否则订单会自动取消。</span>
        <span>应付金额: <span>￥168.00</span></span>
      </div>
      <div className="dingdan clearfix">
        <span>订单号：12345678912345</span>
        <span><img src={fangshi} alt={fangshi}/>186****0734</span>
        <span><img src={fangwei} alt={fangwei}/>迪力木拉提</span><br></br><br></br>
        <span><img src={fangshi} alt={fangshi}/>新疆维吾尔族自治区伊犁哈萨克自治州奎屯市乌鲁木齐西路56圆71栋1单元1103号</span>
      </div>
      <div className="zhifufangshi clearfix">
        <span>选择支付方式</span>
        <div><a className="zhifubao biankuang" href="#">
          <img src={Logo} alt="Logo"/>
          <img className="xiaoduigou" src={Logo1} alt="Logo1"/></a></div>
        <div><a className="weixin" href="#"><img src={Logo2} alt="Logo2"/>
          <img className="xiaoduigou" src={Logo1} alt="Logo1"/></a></div>
      </div>
      <Link to = '/' className="fukuan">付款</Link>
      <div className="wxfk clearfix">
        <h3>微信支付</h3>
        <div className="erweima">
          <span>距离二维码过期还剩<span className="daojishi">60</span>秒<br></br>过期后请刷新页面重新获取二维码</span>
          <img src={Logo3} alt="Logo3"/>
          <span>请使用微信扫一扫<br></br>
          扫描二维码支付！</span>
        </div>
        <img src={Logo4} alt="Logo4"/>
      </div>
    </div>
    <div className="xczg">
      <div className="top">
        <div className="hed clearfix">
          <h1>填写订单</h1>
          <span>付款，购买成功</span>
          <span>填写订单</span>
          <span>购物车</span>
        </div>
        <div className="xczg_on clearfix">

          <img src={Logo5} alt="Logo5"/>
          <div className="zg clearfix">
            <h4>支付成功</h4>
            <span>订单号：12345678912345<br></br>成功支付：￥168</span>
            <a href="#">查看订单</a>
            <a href="#">继续逛逛</a>

          </div>
        </div>
      </div>

    </div>
  </div>
              )
  }
}

export default Money
