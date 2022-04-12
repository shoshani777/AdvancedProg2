import React, { Component } from 'react'
import './Message.css'

class Message extends Component {
  

  render() {
    var messageClass = 'Message';
    messageClass += this.props.author ? '' : ' log';
    messageClass += this.props.me ? ' me' : '';
    return (
      <div className={messageClass}>
        {this.props.author && (
          <span className="author">{this.props.author}:</span>
        )}
        {this.props.body}
      </div>
    )
  }
}

export default Message