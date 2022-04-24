import React, { Component } from 'react'
import './MessageList.css'
import Message from './Message'

class MessageList extends Component {
  

  static defaultProps = {
    messages: [],
    group: false,
    unread: 0
  }
  
  render() {
    if (this.props.unread > 0) {
      const messages = this.props.messages.slice();
      messages.splice(Math.max(messages.length - this.props.unread, 0), 0, {type: 'text', body: 'unread'})
      return (
        <div className="MessageList">
          {messages.map((message, i) => (
            <div className='Wrapper' key={i}>
              <Message {...message} group={this.props.group}/>
            </div>
          ))}
        </div>
      )
    }
    return (
      <div className="MessageList">
        {this.props.messages.map((message, i) => (
          <div className='Wrapper' key={i}>
            <Message {...message} group={this.props.group}/>
          </div>
        ))}
      </div>
    )
  }
}

export default MessageList