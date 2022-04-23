import React, { Component } from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
    constructor(props) {
      //has props.unread
      super(props);
      this.group = props.group;
      this.state = {
          messages: props.givenChat,id: props.id,unread: props.unread
      }
      this.updateFunc = props.updateFunc;
    } 

    handleNewMessage = (text, type) => {
      var changedGroup = {messages:[...this.state.messages,{me: true, body: text, type: type}]}
      this.updateFunc({groupIdToChange:this.state.id,newGroup:changedGroup})
    }
    render() {
        return (
          <div className="Chat">
            <MessageList messages={this.state.messages} group={this.group} unread={this.state.unread}/>
            <MessageForm onMessageSend={this.handleNewMessage} />
          </div>
        )
    }
  }
  export default Chat