import React from 'react'
import './MessageForm.css'

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.onMessageSend = props.onMessageSend;
    this.textInput = <input type="text" ref={(node) => (this.input = node)} 
                      placeholder="Enter your message..." onKeyUp={this.typing}/>;
    this.sendText = <button className="bi bi-send" onClick={this.send}></button>
  }


  componentDidMount = () => {
    this.input.focus();
  }

  send = () => {
    if (this.input.value === '') {
        return;
    }
    this.onMessageSend(this.input.value);
    this.input.value = "";
  }

  typing = (event) => {
    if (event.keyCode === 13) {
      this.send(event);
    }
  }

  render() {
    return (
      <div className="MessageForm">
        <div className="input-container">
          {this.textInput}
        </div>
        <div className="right-button-container">
          {this.sendText}
        </div>
      </div>
    )
  }
}

export default MessageForm