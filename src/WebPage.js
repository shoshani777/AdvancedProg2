import React, { Component } from "react";
import Chat from "./Chat/Chat";
import ChatGroup from "./ChatGroups/ChatGroups";
import chat_db from "./fictiveChatDB";
import './bootstrap/dist/css/bootstrap.min.css';
import NewContact from "./ChatGroups/NewContact";
import "./WebPage.css";
import DefualtChat from "./DefualtChat";
import * as signalR from '@microsoft/signalr';
import serverUrl from "./ServerUrl";

class WebPage extends Component {
  constructor(props) {
    super(props);
    if (!props.userName) {
      window.location.href = "/logIn";
    }
    this.state = {
      ...chat_db.get("gilad517"),clickedId:null,userName:"gilad517",unreadOnTop:false
    }
    this.ChangeStateFunc = this.ChangeState.bind(this);
    this.checkGroupNameFunc = this.checkGroupName.bind(this);
    for (let index = 0; index < this.state.groups.length; index++) {
      const element = this.state.groups[index];
      if(element.isClicked){
        this.state.groups[index].unread = 0;
      }
      element.isClicked = false;
    }
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(serverUrl + "hubs/chat", {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .withAutomaticReconnect()
      .build();
      this.connection.start()
            .then(() => {
                this.connection.on('ReceiveMessage', (message, userFor) => {
                  if (message.Author == this.props.userName) {
                    this.forceUpdate();
                  }
                  if (userFor != this.props.userName) {
                    return;
                  }
                  this.state.groups.forEach(group => {
                    if (group.id == message.Author) {
                      if (!group.isClicked) {
                        group.unreadMark = group.unreadMark + 1;
                      }

                      var changedGroup = null;
                  
                      if (this.props.unread === 0) {
                        changedGroup = {messages:[...group.messages,message]}
                      } else {
                        changedGroup = {messages:[...group.messages,message], unread: group.unread + 1}
                      }
                      this.ChangeStateFunc({groupIdToChange:group.id,newGroup: changedGroup,groupIdToTop:group.id})
                    }
                  });
                });
            })
            .catch(e => console.log('Connection failed: ', e));
  }

  checkGroupName({nameToCheck}){
    for (let index = 0; index < this.state.groups.length; index++) {
      const element = this.state.groups[index];
      if(element.name===nameToCheck){
        return false;
      }
    }
    return true;
  }

  ChangeState({groupIdToChange,newGroup,newClickedId,groupIdToTop}){
    var newState = this.state
    newState.unreadOnTop = false
    if(typeof groupIdToTop !== 'undefined'){
      var groupToTop = null
      for (let index = 0; index < newState.groups.length; index++) {
        const element = newState.groups[index];
        if(element.id === groupIdToTop){
          groupToTop = element
          newState.groups.splice(index,1)
        }
      }
      newState.groups.unshift(groupToTop)
    }
    if(typeof groupIdToChange !== 'undefined'){
      var gruopPlace = null
      for (let index = 0; index < newState.groups.length; index++) {
        const element = newState.groups[index];
        if(element.id === groupIdToChange){
          gruopPlace = index
        }
      }
      newState.groups[gruopPlace] = {...newState.groups[gruopPlace],...newGroup}
    } else if(typeof newGroup !== 'undefined'){
      var maxId = 1
      for (let index = 0; index < newState.groups.length; index++) {
        const element = newState.groups[index];
        if(element.id > maxId){
          maxId = element.id
        }
      }
      newGroup.id = maxId+1;
      newState.groups.unshift(newGroup);
      newState.clickedId = maxId+1;
      for (let index = 0; index < newState.groups.length; index++) {
        const element = newState.groups[index];
        if(element.isClicked){
          newState.groups[index].unread = 0;
        }
        newState.groups[index].isClicked = (element.id === maxId+1);
      }
    }
    if(typeof newClickedId !== 'undefined'){
      newState.clickedId = newClickedId
      for (let index = 0; index < newState.groups.length; index++) {
        const element = newState.groups[index];
        if(element.isClicked){
          newState.groups[index].unread = 0;
        }
        if(element.id===newClickedId){
          if(!element.isClicked){
            newState.unreadOnTop=true
          }
        }
        newState.groups[index].isClicked = (element.id === newClickedId);
      }
    }
    this.setState({...newState });
  }

  render() {
    var list =[]
    for (let index = 0; index < this.state.groups.length; index++) {
      list.push(<li className="list-group-item noMargin" key={Math.random()}><ChatGroup group={{...this.state.groups[index]}} setGroup={this.ChangeStateFunc}/></li>);
    }
    // var chat=null;
    var chat = <DefualtChat />;//need defualt chat
    if(this.state.clickedId!==null){
      for (let index = 0; index < this.state.groups.length; index++) {
        const element = this.state.groups[index];
        if(element.id===this.state.clickedId){
          chat = <>
          <Chat key={Math.random()} givenChat={element.messages} group={element.isgroup} unread={element.unread} id={this.state.groups[index].id}
          updateFunc={this.ChangeStateFunc} name={element.name} image={element.image} unreadOnTop={this.state.unreadOnTop}/>
          </>
        }
      }
    }
    return (
      <>
      <div>
        <div className="webPageContainer container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-2 col-md-auto groupColumn overflow-auto">
              <div>
                <table border="0" className="userTbl">
                  <tbody>
                    <tr>
                      <td className="imgTd">
                        <img className="userImg" alt={"couldn't load"} src={this.state.image}/>
                      </td>
                      <td>
                        <div>
                          <p className="userNameTxt text-truncate">
                            {this.state.userName}
                          </p>
                        </div>
                      </td>
                      <td className="newContactTd">
                        <NewContact AddingFunc={this.ChangeStateFunc} checkGroupName={this.checkGroupNameFunc}/>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="groupsDivId" className="groupDiv">
                <ul className="list-group">
                  {list}
                </ul>
              </div>
            </div>
            <div className="col-8 Chat">
              {chat}
            </div>
            <div className="col-1 overflow-auto">
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}
export default WebPage