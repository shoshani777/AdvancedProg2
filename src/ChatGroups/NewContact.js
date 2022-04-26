import React, { Component } from 'react';
import '../bootstrap/dist/css/bootstrap.min.css';
import "./NewContact.css";
import defualtImg from "../images/defualtChat.jpg";
import Input from '../identification/Input';
import $ from 'jquery';

class NewContact extends Component {
    constructor(props) {
      super(props);
      this.state={
        name:null
      }
      this.addFunc = props.AddingFunc;
      this.setChatNameFunc = this.setChatName.bind(this);
      this.inputRef = React.createRef();
      this.picInputRef = React.createRef();
    }

    resetNameFunc=()=>{
        $("#displayImage").attr("src", defualtImg);
        this.setState({
            Image: defualtImg
        });
        this.setChatNameFunc("");
        this.inputRef.current.setState({
            inputClass: '',
            error: ''
        })
        $("#ChatNameId").val('');
        
    }
    setChatName(value) {
        this.setState({
            name: value
        })
    }
    handleClickFunc=()=>{
        const input = document.getElementById('ChatNameId')
        if(input.classList.contains("is-valid"))
        {
            this.addFunc({newGroup:{id:0 , isClicked: false, name:this.state.name , image:$("#displayImage").attr("src") ,isgroup:false, unreadMark: 0, unread: 0, messages:[]}})
            $("[data-dismiss=modal]").trigger({ type: "click" });
        }
    }

    addPic = () => {
       this.picInputRef.current.click();
    }
    
    display = (result) => {
        $("#displayImage").attr("src", result);
    }
    
    addedFile = () => {
    
        const file = this.picInputRef.current.files[0];
        const reader = new FileReader();
    
        reader.addEventListener("load", () => this.display(reader.result), false);
        
        if (file) {
          reader.readAsDataURL(file);
        }
    }

    render() {
        const regex = '^[a-zA-Z]';
        const error = 'must begin with a letter';
        const ChatNameElement = <Input inputSetter={this.setChatNameFunc} checkRegex={regex} type={'text'} howShortened={'3'} longInput={true} 
        id={'ChatNameId'} description={'Chat Name'} ref={this.inputRef} eDescription={error}/>;
        return (
          <>
            <a type="button" href='#' className="btn addChat" data-toggle="modal" data-target="#CenteralModal" onClick={this.resetNameFunc}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-plus addChatIcon" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                    <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
            </a>

            <div className="modal fade" id="CenteralModal" tabIndex="-1" role="dialog" aria-labelledby="CentralModalTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Add a new Chat</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {ChatNameElement}
                    <input type="file" accept="image/*" ref={this.picInputRef} onChange={this.addedFile} hidden/>
                    <div className='input-div'>
                        <img className='chatImg' id='displayImage' src={defualtImg} alt="couldn't load" width="50" height="40" />
                        <button className="btn btn-primary add-button" onClick={this.addPic}><i class="bi bi-plus-circle"></i></button>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-outline-success" onClick={this.handleClickFunc}>Add</button>
                </div>
                </div>
            </div>
            </div>
          </>
      )
    }
  }
  export default NewContact