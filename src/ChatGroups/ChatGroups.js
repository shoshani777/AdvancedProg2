import React, { Component } from 'react'
import MessageList from '../Chat/MessageList'
import MessageForm from '../Chat/MessageForm'
import '../bootstrap/dist/css/bootstrap.min.css';
import "./ChatGroups.css";

class ChatGroup extends Component {
    constructor(props) {  
      super(props);
      this.state = {...props.group
        //   name: props.name , isClicked: props.isClicked,
        //   image: props.image , messages: props.messages 
      }
      this.setGroup = props.setGroup;
      this.handleClick = this.handleClick.bind(this);
    } 

    handleClick = ()=>{
      if(!this.state.isClicked){
        var oldGroup = this.state
        oldGroup.unreadMark = 0
        this.setGroup({groupIdToChange:oldGroup.id,newGroup:oldGroup,newClickedId:oldGroup.id})
      }
    }
    render() {
      //future logic to get the last message
      var lastmsg = "",lastmsgIcon=<></>;
      if(this.state.messages.length > 0){
        var last = this.state.messages[this.state.messages.length-1]
        if(!last.me){
          lastmsg+=last.author+": "
        }
        if(last.type==="img"){
          lastmsg+="image"
          lastmsgIcon=<i className="bi bi-file-earmark-image-fill icn"></i>
        } else if(last.type==="audio"){
          lastmsg+="recording"
          lastmsgIcon=<i className="bi bi-soundwave icn"></i>
        } else if(last.type==="text"){
          lastmsg+=last.body
        }
      }

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
            <tbody>
              <tr>
                <td className='imgTd'>
                <img className='img' src={this.state.image} alt="db error"></img>
                </td>
                <td className='textTd'>
                  <table border = "0" className='smalltbl'>
                    <tbody>
                      <tr className='headln'>
                        <td>
                          <p className="card-title groupname">{this.state.name}</p>
                        </td>
                        <td className='unreadTd'>
                          {unreadMsg}
                        </td>
                      </tr>
                      <tr className='subtitles'>
                        <td>
                          <p className='card-subtitle lastmsg text-truncate'>{lastmsgIcon}{lastmsg}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </a>
      )
    }
  }
  export default ChatGroup