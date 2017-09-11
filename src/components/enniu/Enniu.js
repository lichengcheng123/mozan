import React, { Component } from 'react'
import './enniu.css'
import Denglu from '../denglu/Denglu'
import LoginFrom from '../Login-from/LoginFrom'

class Enniu extends Component {

  state = {
    showForm: false,
    currentUser: ''
  }

  logout = () => {
    this.setState({
      showForm: false,
      currentUser: ''
    })
  }

  showLoginForm = () => {
    this.setState({
      showForm: true
    })
  }

  hideLoginForm = () => {
    console.log('hideLoginForm...')
    this.setState({
      showForm: false
    })
  }

  login = (userName) => {
    this.setState({
      currentUser: userName
    })
  }

  render () {
    const { showForm, currentUser  } = this.state
    return (
      <div className='enniu'>
        <Denglu
          currentUser={currentUser}
          showLoginForm={this.showLoginForm}
          logout={this.logout}
        />

        {showForm && <LoginFrom
          login={this.login}
          hideLoginForm={this.hideLoginForm}
          />}
      </div>
    )
  }
}

export default Enniu
