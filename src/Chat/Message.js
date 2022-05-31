import React, { Component } from 'react'
import './Message.css'
import peopleToColor from './peopleToColor';

class Message extends Component {
  
  // randomColor = () => {
  //   var result = Math.floor(Math.random() * 16); // random between 0-15 (include)
  //   for (var i = 0; i < 5; i++) {
  //     result = result << 4;
  //     result += Math.floor(Math.random() * 16);
  //   } // result now contains a random color
  //   const colorWithoutGreen = parseInt('FF00FF', 16);
  //   result = result & colorWithoutGreen; // remove the green color from result
  //   return result.toString(16);
  // }

  render() {
    var messageClass = 'Message';
    messageClass += this.props.Author ? '' : ' log';
    if (this.props.Author) {
      messageClass += this.props.me? ' me' : ' other';
    }
    var status = this.props.me? this.props.sentStatus: null;
    // var color;
    // if (peopleToColor.has(this.props.author)) {
    //   color = peopleToColor.get(this.props.author);
    // }
    // else {
    //   color = this.randomColor();
    //   peopleToColor.set(this.props.author, color);
    // }
    // const authorDisplay = !this.props.me && this.props.group && this.props.author && (
    //   <div className="author" style={{color:'#' + color}}>{this.props.author}</div>
    // )
    return (
      <div className={messageClass}>
        {this.props.icon}
        {this.props.Content}
        <div>
          {status}
        </div>
      </div>
    )
    // if (this.props.type === 'text') {
    //   return (
    //     <div className={messageClass}>
    //       {this.props.icon}
    //       {authorDisplay}
    //       {this.props.body}
    //     </div>
    //   )
    // } else if (this.props.type === 'img') { // assume the body is the src
    //     return (
    //       <div className={messageClass}>
    //         {authorDisplay}
    //         <img src={this.props.body} alt="couldn't load" width="100" height="80" />
    //       </div>
    //     )
    // } else if (this.props.type === 'audio') {
    //     return (
    //       <div className={messageClass}>
    //         {authorDisplay}
    //         <audio controls>
    //           <source src={this.props.body} type="audio/mpeg" />
    //         </audio>
    //       </div>
    //     )
    // }
  }
}

export default Message