import React, { Component } from "react";
import Chat from "./Chat/Chat";
import ChatGroup from "./ChatGroups/ChatGroups";
import chat_db from "./fictiveChatDB";
import './bootstrap/dist/css/bootstrap.min.css';
import NewContact from "./ChatGroups/NewContact";

class WebPage extends Component {
  constructor(props) {
    super(props);
    this.state = {...chat_db.get(props.userName),clickedId:null
      //   name: props.name , isClicked: props.isClicked,
      //   image: props.image , messages: props.messages 
    }
    this.ChangeStateFunc = this.ChangeState.bind(this)
    for (let index = 0; index < this.state.groups.length; index++) {
      const element = this.state.groups[index];
      element.isClicked = false;
    }
  }
  // checkingFunc(){
  //   console.log("checkingFunc: ")
  //   console.log(this.state)
  // }

  ChangeState({groupIdToChange,newGroup,newClickedId,groupIdToTop}){
    var newState = this.state
    if(typeof groupIdToTop !== 'undefined'){
      var groupToTop = null
      for (let index = 0; index < newState.groups.length; index++) {
        const element = newState.groups[index];
        if(element.id == groupIdToTop){
          groupIdToTop = element
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
      newState.groups[gruopPlace] = newGroup
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
        newState.groups[index].isClicked = (element.id == maxId+1);
        //also need to zero the unread attribute of the last clicked group
      }
    }
    if(typeof newClickedId !== 'undefined'){
      newState.clickedId = newClickedId
      for (let index = 0; index < newState.groups.length; index++) {
        const element = newState.groups[index];
        newState.groups[index].isClicked = (element.id == newClickedId);
        //also need to zero the unread attribute of the last clicked group
      }
    }
    this.setState({...newState });
  }

  render() {
    var list =[]
    for (let index = 0; index < this.state.groups.length; index++) {
      list.push(<ChatGroup key={Math.random()} group={{...this.state.groups[index]}} setGroup={this.ChangeStateFunc} />);
      //list.push(<ChatGroup key={this.state.groups[index].id} group={{...this.state.groups[index]}} setGroup={this.ChangeStateFunc} />);
    }
    var chat = <></>;//need defualt chat
    if(this.state.clickedId!==null){
      for (let index = 0; index < this.state.groups.length; index++) {
        const element = this.state.groups[index];
        if(element.id===this.state.clickedId){
          chat = <>
          <Chat key={Math.random()} givenChat={element.messages} group={false}/>
          </>
        }
      }
    }
    return (
      <div>
        {/* <Chat givenChat={[{me: false, author: 'Gilad', body: 'HEY'}]}/>
        <NewContact AddingFunc={this.ChangeStateFunc}/> */}
        <NewContact AddingFunc={this.ChangeStateFunc}/>
        {list}
        {chat}
        {/* {this.state.groups.map(element=>{
          if(element.id ==5){
            console.log(this.state)
            console.log(element)
          }
          return <ChatGroup props={element} setGroup={this.ChangeStateFunc} />
        })} */}

      </div>
    )
  }
}
export default WebPage