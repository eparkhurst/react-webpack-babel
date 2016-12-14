import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Content from './content.js'
import './style.css'

class App extends React.Component {
  render() {
    return <div>
      <h1>Suck it</h1>
      <Content />
    </div>
  }
}

ReactDOM.render(<App/>, document.getElementById('main'));
