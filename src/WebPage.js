import React, { Component } from "react";
import Chat from "./Chat/Chat";
import ChatGroup from "./ChatGroups/ChatGroups";
import chat_db from "./fictiveChatDB";
import './bootstrap/dist/css/bootstrap.min.css';

class WebPage extends Component {
  constructor({userName}) {
    super();
    this.state = {...chat_db.get(userName),clickedId:6
      //   name: props.name , isClicked: props.isClicked,
      //   image: props.image , messages: props.messages 
    }
    this.ChangeState.bind(this)
  }
  
  ChangeState({groupIdToChange,newGroup,newClickedId,groupIdToTop}){
    var newState = this.state
    if(typeof newClickedId !== 'undefined'){
      newState.clickedId = newClickedId
      alert("changedClickedId")
    }
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
      newGroup.id = maxId+1
      newState.groups.unshift(newGroup)
    }
    this.Setstate({...newState})
  }

}
export default WebPage