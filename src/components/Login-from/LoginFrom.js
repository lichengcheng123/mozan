import React, { Component } from 'react'
import './login-from.css'

class LoginForm extends Component {
  state = {
    userName: '',
    password: ''
  }

  changeUserName = (e) => {
    this.setState({
      userName: e.target.value
    })
  }

  changePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = () => {
    console.log(this.state.userName)
    this.props.login(this.state.userName)
  }

  render () {
    const { hideLoginForm } = this.props
    const { userName, password } = this.state
    return (
      <div className='login-form'>
        <div className='name'>魔 赞</div>
        <div>用户名:</div><input value={userName}
          onChange={this.changeUserName}
                       type='text' />
        <div>密码:</div><input value={password}
          onChange={this.changePassword}
                      type='password' />
        <button onClick={this.handleSubmit}
        className='login-button'>
          登录
        </button>
        <button className='login-cancel'
          onClick={hideLoginForm}>
          取消
        </button>
      </div>
    )
  }
}

export default LoginForm
