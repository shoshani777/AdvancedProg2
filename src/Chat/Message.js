import React, { Component } from 'react'
import './Message.css'

class Message extends Component {
  

  render() {
    var messageClass = 'Message';
    messageClass += this.props.author ? '' : ' log';
    messageClass += this.props.me ? ' me' : ' other';
    const authorDisplay = !this.props.me && this.props.group && this.props.author && (
      <span className="author">{this.props.author}</span>
    )
    
    if (this.props.type === 'text') {
      return (
        <div className={messageClass}>
          {authorDisplay}
          {this.props.body}
        </div>
      )
    } else if (this.props.type === 'img') { // assume the body is the src
        return (
          <div className={messageClass}>
            {authorDisplay}
            <img src={this.props.body} alt="couldn't load" width="50" height="40" />
          </div>
        )
    } else if (this.props.type === 'audio') {
        return (
          <div className={messageClass}>
            {authorDisplay}
            <audio controls>
              <source src={this.props.body} type="audio/mpeg" />
            </audio>
          </div>
        )
    }
  }
}

export default Message