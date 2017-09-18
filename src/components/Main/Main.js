import React, { Component } from 'react'

import Shouye from '../shouye/index-1'
import Cart from '../cart/Cart'
import Cartd from '../cartd/Cartd'
import Tijiao from '../tijiao/Tijiao'
import Money from '../money/Money'
import {
  BrowserRouter as Router,
  Route
 } from 'react-router-dom'


class Main extends Component {
  render () {
    return (
      <Router>

        <div className="Main">
          <Route exact path='/' component={Shouye} />
          <Route path='/cartd' component={Cartd} />
          <Route path='/cart' component={Cart} />
          <Route path='/tijiao' component={Tijiao} />
          <Route path='/money' component={Money} />
        </div>

      </Router>

      )
  }
}

export default Main
