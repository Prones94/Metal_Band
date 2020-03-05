import React, { Component } from 'react'
import './style.css'
import Emoji from '../Emoji'

class Like extends Component {
  constructor(props) {
    super(props)

    this.state = { count: 0 }
  }

  increment() {
    console.log(this.state);
    this.setState({ count: this.state.count + 1 })
  }
  decrement() {
    console.log(this.state);
    this.setState({ count: this.state.count - 1 })
  }
  render() {
    return (
      <div className="likeContainer">
        <button onClick={(e) => {
          this.decrement()
        }}><Emoji symbol="👎" label="thumbs-down" /></button><h1>{this.state.count}</h1><button onClick={(e) => {
          this.increment()
        }}><Emoji symbol="👍" label="thumbs-up" /></button>
      </div>
    )
  }
}

export default Like
