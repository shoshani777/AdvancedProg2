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
          <div className='Wrapper' key={i}>
            <Message {...message} group={this.props.group}/>
          </div>
        ))}
      </div>
    )
  }
}

export default MessageList