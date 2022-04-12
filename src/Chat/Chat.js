import React, { Component } from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
    constructor(props) {
      super(props);
      if (props.givenChat) {
        this.state = {
            messages: [{me: false, body: 'encrypted'}].concat(props.givenChat)
          }
      }
      else {
        this.state = {
            messages: [{me: false, body: 'encrypted'}]
        }
      }
      
    } 

    handleNewMessage = (text) => {
        this.setState({
          messages: [...this.state.messages, { me: true, author: "Me", body: text, time: new Date() }],
        })
      }
    render() {
        return (
          <div className="Chat">
            <MessageList messages={this.state.messages} />
            <MessageForm onMessageSend={this.handleNewMessage} />
          </div>
        )
    }
  }
  export default Chat