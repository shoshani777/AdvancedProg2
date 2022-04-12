import React from 'react'
import './MessageForm.css'

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.onMessageSend = props.onMessageSend;
    this.mediaRecorder = null;
    this.shouldSend = false;
    this.textInput = <input type="text" ref={(node) => (this.input = node)} 
                      placeholder="Enter your message..." onKeyUp={this.typing}/>;
    this.sendText = <button onClick={this.send}>send</button>
    this.recordButton = <button onClick={this.recordAudio}>record</button>;
    this.deleteAudio = <button onClick={this.removeAudio}>remove</button>;
    this.stopRecording = <button onClick={this.stopAudio}>stop</button>;
    this.recordingInputArea = <span>{this.deleteAudio} recording...</span>

    this.addFileButton = 'add file'
    this.state = {
      rightButton: this.recordButton,
      inputArea: this.textInput,
      leftButton: this.addFileButton
    }

  }

  componentDidMount = () => {
    this.input.focus();
  }

  send = (event) => {
    event.preventDefault();
    if (this.input.value === '') {
        return;
    }
    this.onMessageSend(this.input.value, 'text');
    this.input.value = "";
  }

  typing = (event) => {
    if (this.input.value === '') {
      this.setState({
        rightButton: this.recordButton
      })
    }
    else {
      this.setState({
        rightButton: this.sendText
      })
    }
  }

  recordAudio = (event) => {
    event.preventDefault();
    this.setState({
      inputArea: this.recordingInputArea,
      rightButton: this.stopRecording,
      leftButton: ''
    });

    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      const mediaRecorder = new MediaRecorder(stream);
      this.mediaRecorder = mediaRecorder;
      mediaRecorder.start();

      const audioChunks = [];
      mediaRecorder.addEventListener("dataavailable", event => {
        audioChunks.push(event.data);
      });

      mediaRecorder.addEventListener("stop", () => {
        this.mediaRecorder.stream.getTracks()[0].stop();
        const audioBlob = new Blob(audioChunks);
        const audioUrl = URL.createObjectURL(audioBlob);
        if (this.shouldSend) {
          this.onMessageSend(audioUrl, 'audio');
        }
        this.setState({
          inputArea: this.textInput,
          rightButton: this.recordButton,
          leftButton: this.addFileButton
        });
      });

      
    });
  }

  stopAudio = (event) => {
    event.preventDefault();
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.shouldSend = true;
      this.mediaRecorder.stop();
    }
  }
  removeAudio = (event) => {
    event.preventDefault();
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.shouldSend = false;
      this.mediaRecorder.stop();
    }
  }

  render() {
    return (
      <form className="MessageForm">
        <div>
          {this.state.leftButton}
        </div>
        <div className="input-container">
          {this.state.inputArea}
        </div>
        <div className="button-container">
          {this.state.rightButton}
        </div>
      </form>
    )
  }
}

export default MessageForm