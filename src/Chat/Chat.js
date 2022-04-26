import React, { Component } from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import './Chat.css'

class Chat extends Component {
    constructor(props) {
      super(props);
      this.group = props.group;
      this.state = {
          messages: props.givenChat,
          id: props.id
      }
      this.updateFunc = props.updateFunc;
    } 

    handleNewMessage = (text, type) => {
      var changedGroup = null
      if (this.props.unread == 0) {
        changedGroup = {messages:[...this.state.messages,{me: true, body: text, type: type,author:'me'}]}
      } else {
        changedGroup = {messages:[...this.state.messages,{me: true, body: text, type: type,author:'me'}], unread: this.props.unread + 1}
      }
      var allGroupsDiv = document.getElementById('groupsDivId');
      allGroupsDiv.scrollTop = 0;
      this.updateFunc({groupIdToChange:this.state.id,newGroup:changedGroup,groupIdToTop:this.state.id})
    }
    render() {
        return (
          <div className='chatContainer'>
            <div className='table-container'>
            <table border="0" className="chat-tbl">
                  <tbody>
                    <tr>
                      <td className="imgTd">
                        <img className="chatImg" src={this.props.image}/>
                      </td>
                      <td>
                        <div>
                          <p className="chat-name text-truncate">
                            {this.props.name}
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                </div>
            <MessageList messages={this.state.messages} group={this.group} unread={this.props.unread} unreadOnTop={this.props.unreadOnTop}/>
            <MessageForm onMessageSend={this.handleNewMessage} />
          </div>
        )
    }
  }
  export default Chat