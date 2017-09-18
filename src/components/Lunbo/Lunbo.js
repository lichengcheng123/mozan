import React, { Component } from 'react'
import './lunbo.css'
import Logo from './images/1.jpg'
import Logo1 from './images/2.jpg'
import Logo2 from './images/3.jpg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

class Lunbo extends Component {
  render () {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true
  }
  const slides =[

    <div className="dish-card-wrap" key='1'>
      <div className="dish-card">
        <img src={Logo} alt="Logo"/>
      </div>
    </div>,

    <div className="dish-card-wrap" key='2'>
      <div className="dish-card">
        <img src={Logo1} alt="Logo"/>
      </div>
    </div>,

    <div className="dish-card-wrap" key='3'>
      <div className="dish-card">
        <img src={Logo2} alt="Logo"/>
      </div>
    </div>
  ]
  const slider =(
    <Slider {...settings}>
      {slides}
    </Slider>
  )
    return (
      <div className="lunbo">
        {slider}
      </div>
    )
  }
}

export default Lunbo
