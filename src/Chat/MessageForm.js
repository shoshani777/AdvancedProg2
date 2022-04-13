import React from 'react'
import './MessageForm.css'
import $ from 'jquery';

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

    this.addFileButton = <button onClick={this.addPic}>add pic</button>

    this.picInputRef = React.createRef();


    this.displayImage = <img id='displayImage' src='' alt="couldn't load" width="50" height="40" />

    this.state = {
      rightButton: this.recordButton,
      inputArea: this.textInput,
      leftButton: this.addFileButton
    }
    
  }

  addPic = (event) => {
    event.preventDefault();
    this.picInputRef.current.click();
  }

  display = (result) => {
    $("#displayImage").attr("src", result);
  }

  addedFile = (event) => {

    const file = this.picInputRef.current.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => this.display(reader.result), false);
    
    if (file) {
      reader.readAsDataURL(file);
      this.setState({ // image was chosen
        inputArea: this.displayImage
      })
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
    this.setState({
      rightButton: this.recordButton
    })
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
    if (event.keyCode === 13) {
      this.send(event);
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
        <input type="file" accept="image/*" ref={this.picInputRef} onChange={this.addedFile} hidden/>
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