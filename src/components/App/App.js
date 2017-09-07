import React, { Component } from 'react'
import './App.css'
import Main from '../Main/Main'
import Layout from '../Layout/layout'

class App extends Component {
  render () {
    return (
      <div className='app'>
        
        <Layout>
          <Main />
        </Layout>
      </div>
    )
  }
}

export default App
