import React, { Component } from 'react'
import './footer.css'    
import Logo from './images/taobaoma_14.jpg'
import Logo1 from './images/taobao_21.jpg'
import Logo2 from './images/weixinma_14.jpg'
import Logo3 from './images/weixin_21.jpg'
import Logo4 from './images/logo_03.png'



class Footer extends Component {
  render () {
    return (
      <div className='footer'>
        <div className="footer_up">
          <div className="footer_upp clearfix">
            <div className="footer_left clearfix">
              <h1>帮助信息</h1>
              <ul>
                <li>
                  <i className="iconfont">&#xe65d;</i>
                  <a href="#">购物指南</a>
                </li>
                <li>
                  <i className="iconfont">&#xe633;</i>
                  <a href="#">支付方式</a>
                </li>
                <li>
                  <i className="iconfont">&#xe636;</i>
                  <a href="#">配送方式</a>
                </li>
                <li>
                  <i className="iconfont">&#xe51a;</i>
                  <a href="#">售后服务</a>
                </li>
              </ul>
              <ul>
                <li>
                  <i className="iconfont">&#xe603;</i>
                  <a href="#">服务中心</a>
                </li>
                <li>
                  <i className="iconfont">&#xe643;</i>
                  <a href="#">关于我们</a>
                </li>
                <li>
                  <i className="iconfont">&#xe66a;</i>
                  <a href="#">免责条款</a>
                </li>
                <li>
                  <i className="iconfont">&#xe62d;</i>
                  <a href="#">友情链接</a>
                </li>
              </ul>
            </div>
            <div className="footer_min">
              <h1>关注我们</h1>
              <div>
                <img src={Logo} alt="Logo"/>
                <img src={Logo1} alt="Logo"/>
              </div>
              <div>
                <img src={Logo2} alt="Logo"/>
                <img src={Logo3} alt="Logo"/>
              </div>
            </div>
            <div className="footer_rigth">
              <h1>客服热线</h1>
              <b>
                <i className="iconfont">&#xe603;</i>
                400 113 5353<br></br>
                <span>[ 周一至周五 9:00-18:00 ]</span>
              </b>
            </div>
          </div>
        </div>
        <div className="footer_down">
          <div className="footer_downd">
            <img src={Logo4} alt="Logo"/>
            <span>北京开普乐科技有限公司©版权所有 Copyright 2015-2025 Morethan.cc All rights reserved地址：北京市朝阳区建国路93号院4号楼4层505</span>
          </div>
        </div>

      </div>
    )
  }
}

export default Footer
