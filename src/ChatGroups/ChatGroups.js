import React, { Component } from 'react'
import MessageList from '../Chat/MessageList'
import MessageForm from '../Chat/MessageForm'
import '../bootstrap/dist/css/bootstrap.min.css';
import "./ChatGroups.css";

class ChatGroup extends Component {
    constructor({props,setGroup}) {
      if(props.isClicked){
        console.log("clicked with id: ")
        console.log(props.id)
      }
      super({props,setGroup});
      this.state = {...props
        //   name: props.name , isClicked: props.isClicked,
        //   image: props.image , messages: props.messages 
      }
      this.setGroup = setGroup;
      this.handleNewMessageByMe = this.handleNewMessageByMe.bind(this);
      this.handleClick = this.handleClick.bind(this);
    } 

    handleNewMessageByMe = (text) => {
        this.setState({
          messages: [...this.state.group.messages, { me: true, author: "Me", body: text, time: new Date() }],
        })
      }
    //not finished!! should alert db and turn of any other clicked ones
    handleClick = ()=>{
      console.log("clicked")
      if(!this.state.isClicked){
        //also need to zero the unread attribute of the last clicked group
        var oldGroup = this.state
        oldGroup.unreadMark = 0
        this.setGroup({groupIdToChange:oldGroup.id,newGroup:oldGroup,newClickedId:oldGroup.id})
      }
    }
    render() {
      console.log("group rendered- is clicked: "+this.state.isClicked+" and id: "+this.state.id)
      console.log("group rendered2- all state: ")
      console.log(this.state)
      //future logic to get the last message
      const lastmsg = "Last message in the chat";
      var unreadMsg = <></>;
      if(this.state.unreadMark>0){
        unreadMsg = <div className='unreadDiv'><p>{this.state.unreadMark}</p></div>
        if(this.state.unreadMark>99){
          unreadMsg = <div className='unreadDiv'><p>99+</p></div>
        }
      }
      const linkClass = this.state.isClicked?"card group clickedgroup":"card group";
      return (
        <a className={linkClass} onClick={this.handleClick}>
          <table border = "0" className='bigtbl'>
            <tr>
              <td className='imgTd'>
              <img className='img' src={this.state.image} alt="db error"></img>
              </td>
              <td className='textTd'>
                <table border = "0" className='smalltbl'>
                  <tr className='headln'>
                    <td>
                      <p className="card-title groupname">{this.state.name}</p>
                    </td>
                    <td className='unreadTd'>
                      {unreadMsg}
                    </td>
                  </tr>
                  <tr className='subtitles'>
                    <p className='card-subtitle lastmsg'>{lastmsg}</p>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </a>
      )
    }
  }
  export default ChatGroup