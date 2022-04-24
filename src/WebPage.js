import React, { Component } from "react";
import Chat from "./Chat/Chat";
import ChatGroup from "./ChatGroups/ChatGroups";
import chat_db from "./fictiveChatDB";
import './bootstrap/dist/css/bootstrap.min.css';
import NewContact from "./ChatGroups/NewContact";
import "./WebPage.css";

class WebPage extends Component {
  constructor(props) {
    super(props);
    if (!props.userName) {
      window.location.href = "/logIn";
    }
    this.state = {
      ...chat_db.get(props.userName),clickedId:null,userName:props.userName
    }
    this.ChangeStateFunc = this.ChangeState.bind(this)
    for (let index = 0; index < this.state.groups.length; index++) {
      const element = this.state.groups[index];
      if(element.isClicked){
        this.state.groups[index].unread = 0;
      }
      element.isClicked = false;
    }
  }

  ChangeState({groupIdToChange,newGroup,newClickedId,groupIdToTop}){
    var newState = this.state
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
      var prevGroup = null
      var gruopPlace = null
      for (let index = 0; index < newState.groups.length; index++) {
        const element = newState.groups[index];
        if(element.id == groupIdToChange){
          gruopPlace = index
          prevGroup = element
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
        newState.groups[index].isClicked = (element.id == maxId+1);
      }
    }
    if(typeof newClickedId !== 'undefined'){
      newState.clickedId = newClickedId
      for (let index = 0; index < newState.groups.length; index++) {
        const element = newState.groups[index];
        if(element.isClicked){
          newState.groups[index].unread = 0;
        }
        newState.groups[index].isClicked = (element.id == newClickedId);
      }
    }
    this.setState({...newState });
  }

  render() {
    var list =[]
    for (let index = 0; index < this.state.groups.length; index++) {
      list.push(<li className="list-group-item noMargin" key={Math.random()}><ChatGroup group={{...this.state.groups[index]}} setGroup={this.ChangeStateFunc}/></li>);
    }
    var chat = <></>;//need defualt chat
    if(this.state.clickedId!==null){
      for (let index = 0; index < this.state.groups.length; index++) {
        const element = this.state.groups[index];
        if(element.id===this.state.clickedId){
          chat = <>
          <Chat key={Math.random()} givenChat={element.messages} group={false} unread={element.unread} id={this.state.groups[index].id}
          updateFunc={this.ChangeStateFunc} name={element.name} image={element.image}/>
          </>
        }
      }
    }
    return (
      <div>
        <div className="webPageContainer container-fluid overflow-auto">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-2 col-md-auto groupColumn overflow-auto">
              <div>
                <table border="1" className="userTbl">
                  <tbody>
                    <tr>
                      <td className="imgTd">
                        <img className="userImg" src={this.state.image}/>
                      </td>
                      <td>
                        <div>
                          <p className="userNameTxt text-truncate">
                            {this.state.userName}
                          </p>
                        </div>
                      </td>
                      <td className="newContactTd">
                        <NewContact AddingFunc={this.ChangeStateFunc}/>
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
            <div className="col-8">
              {chat}
            </div>
            <div className="col-1 overflow-auto">
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default WebPage