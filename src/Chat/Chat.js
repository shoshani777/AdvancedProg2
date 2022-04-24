import React, { Component } from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
    constructor(props) {
      super(props);
      this.group = props.group;
      this.state = {
          messages: props.givenChat,
          id: props.id,
      }
      this.updateFunc = props.updateFunc;
    } 

    handleNewMessage = (text, type) => {
      if (this.props.unread == 0) {
        var changedGroup = {messages:[...this.state.messages,{me: true, body: text, type: type}]}
      } else {
        var changedGroup = {messages:[...this.state.messages,{me: true, body: text, type: type}], unread: this.props.unread + 1}
      }
      this.updateFunc({groupIdToChange:this.state.id,newGroup:changedGroup})
    }
    render() {
        return (
          <div className="Chat">
            <MessageList messages={this.state.messages} group={this.group} unread={this.props.unread}/>
            <MessageForm onMessageSend={this.handleNewMessage} />
          </div>
        )
    }
  }
  export default Chat