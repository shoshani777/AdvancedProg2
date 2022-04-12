import React from 'react'
import './MessageForm.css'

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.onMessageSend = props.onMessageSend;
  }

  componentDidMount = () => {
    this.input.focus();
  }

  send = (event) => {
    event.preventDefault();
    if (this.input.value === '') {
        return;
    }
    this.onMessageSend(this.input.value);
    this.input.value = "";
  }

  render() {
    return (
      <form className="MessageForm" onSubmit={this.send}>
        <div className="input-container">
          <input
            type="text"
            ref={(node) => (this.input = node)}
            placeholder="Enter your message..."
          />
        </div>
        <div className="button-container">
          <button type="submit">
            Send
          </button>
        </div>
      </form>
    )
  }
}

export default MessageForm