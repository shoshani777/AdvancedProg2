import React, { Component } from 'react'
import './Message.css'

class Message extends Component {
  render() {
    var messageClass = 'Message';
    messageClass += this.props.author ? '' : ' log';
    if (this.props.author) {
      messageClass += this.props.me? ' me' : ' other';
    }
    var status = this.props.me? this.props.sentStatus: null;
    
    return (
      <div className={messageClass}>
        {this.props.icon}
        {this.props.body}
        <div>
          {status}
        </div>
      </div>
    )
  }
}

export default Message