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
      if(!this.state.isClicked){
        //also need to zero the unread attribute of the last clicked group
        var oldGroup = this.state
        oldGroup.unreadMark = 0
        this.setGroup({groupIdToChange:oldGroup.id,newGroup:oldGroup,newClickedId:oldGroup.id})
      }
    }
    render() {
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
                          <p className='card-subtitle lastmsg'>{lastmsg}</p>
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