import React, { Component } from 'react'
import './Message.css'

class Message extends Component {
  

  render() {
    var messageClass = 'Message';
    messageClass += this.props.author ? '' : ' log';
    if (this.props.author) {
      messageClass += this.props.me? ' me' : ' other';
    }
    const authorDisplay = !this.props.me && this.props.group && this.props.author && (
      <div className="author">{this.props.author}</div>
    )
    
    if (this.props.type === 'text') {
      return (
        <div className={messageClass}>
          {this.props.icon}
          {authorDisplay}
          {this.props.body}
        </div>
      )
    } else if (this.props.type === 'img') { // assume the body is the src
        return (
          <div className={messageClass}>
            {authorDisplay}
            <img src={this.props.body} alt="couldn't load" width="100" height="80" />
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