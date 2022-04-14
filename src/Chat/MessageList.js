import React, { Component } from 'react'
import './MessageList.css'
import Message from './Message'

class MessageList extends Component {
  

  static defaultProps = {
    messages: [],
    group: false
  }
  
  render() {
    return (
      <div className="MessageList">
        {this.props.messages.map((message, i) => (
          <Message key={i} {...message} group={this.props.group}/>
        ))}
      </div>
    )
  }
}

export default MessageList