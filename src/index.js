import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Content from './components/Content.js'
import './index.css'

class App extends React.Component {
  render() {
    return <div>
      <h1>Basic React App</h1>
      <Content />
    </div>
  }
}

ReactDOM.render(<App/>, document.getElementById('main'));
