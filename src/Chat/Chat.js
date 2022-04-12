import React, { Component } from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
    constructor(props) {
      super(props);
      this.group = props.group;
      if (props.givenChat) {
        this.state = {
            messages: [{me: false, body: 'encrypted', type: 'text'}].concat(props.givenChat)
          }
      }
      else {
        this.state = {
            messages: [{me: false, body: 'encrypted', type: 'text'}]
        }
      }
      
    } 

    handleNewMessage = (text, type) => {
        this.setState({
          messages: [...this.state.messages, { me: true, author: "Me", body: text, type: type, time: new Date() }],
        })
      }
    render() {
        return (
          <div className="Chat">
            <MessageList messages={this.state.messages} group={this.group}/>
            <MessageForm onMessageSend={this.handleNewMessage} />
          </div>
        )
    }
  }
  export default Chat