import React, { Component } from 'react'
import './MessageList.css'
import Message from './Message'
import $ from 'jquery';

class MessageList extends Component {
  

  static defaultProps = {
    messages: [],
    group: false,
    unread: 0
  }

  scrollToBottom = () => {
    $("#list").scrollTop($("#list")[0].scrollHeight);
  }
  
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }
  
  render() {
    if (this.props.unread > 0) {
      const messages = this.props.messages.slice();
      messages.splice(Math.max(messages.length - this.props.unread, 0), 0, {type: 'text', body: 'unread'})
      return (
        <div className="MessageList" id='list'>
          {messages.map((message, i) => (
            <div className='Wrapper' key={i}>
              <Message {...message} group={this.props.group}/>
            </div>
          ))}
        </div>
      )
    }
    return (
      <div className="MessageList" id='list'>
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