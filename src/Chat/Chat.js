import React, { Component } from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import './Chat.css'
import $ from 'jquery';
import serverUrl from '../ServerUrl';
class Chat extends Component {
    constructor(props) {
      super(props);
      this.state = {
          messages: props.givenChat,
          id: props.id
      }
      this.updateFunc = props.updateFunc;
    } 

    handleNewMessage = (text) => {
      var created = new Date();
      var changedGroup = null
      var newMessage = {me: true, body: text, author:'me',date: created, sentStatus: "loading"}
      if (this.props.unread === 0) {
        changedGroup = {messages:[...this.state.messages,newMessage]}
      } else {
        changedGroup = {messages:[...this.state.messages,newMessage], unread: this.props.unread + 1}
      }
      var allGroupsDiv = document.getElementById('groupsDivId');
      allGroupsDiv.scrollTop = 0;
      this.updateFunc({groupIdToChange:this.state.id,newGroup:changedGroup,groupIdToTop:this.state.id})
      $.ajax({
        url: serverUrl + "api/contacts/" + "gilad" + "/messages",
        type: 'POST',
        cache: false,
        contentType: "application/json",
        data: JSON.stringify({
          "content": text
        }),
        success: () => {
          var message = changedGroup.messages.find((m) => { // get the good message
            return m.date.toString() == created.toString();
          })
          message.sentStatus = "sent"; // change status to sent
          this.updateFunc({groupIdToChange:this.state.id,newGroup:changedGroup,groupIdToTop:this.state.id})
          $.ajax({
            url: serverUrl + "api/transfer",
            type: 'POST',
            cache: false,
            contentType: "application/json",
            data: JSON.stringify({
              "from": "string",
              "to": this.props.id,
              "content": text
            }),
            success: () => {
              var message = changedGroup.messages.find((m) => { // get the good message
                return m.date.toString() == created.toString();
              })
              message.sentStatus = "recieved"; // change status
              this.updateFunc({groupIdToChange:this.state.id,newGroup:changedGroup,groupIdToTop:this.state.id})
            },
          })
        },
        error: () => {
          var message = changedGroup.messages.find((m) => { // get the failed message
            return m.date.toString() == created.toString();
          })
          message.sentStatus = "error"; // change status to error
          this.updateFunc({groupIdToChange:this.state.id,newGroup:changedGroup,groupIdToTop:this.state.id})
        }
      })
    }
    render() {
        return (
          <div className='chatContainer'>
            <div className='table-container'>
            <table border="0" className="chat-tbl">
                  <tbody>
                    <tr>
                      <td className="imgTd">
                        <img className="chatImg" alt={"couldn't load"} src={this.props.image}/>
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
            <MessageList messages={this.state.messages} unread={this.props.unread} unreadOnTop={this.props.unreadOnTop}/>
            <MessageForm onMessageSend={this.handleNewMessage} />
          </div>
        )
    }
  }
  export default Chat