import Input from './Input';
import React from "react";
import {
  Link,
} from "react-router-dom";
import users from './users';
import nameToLink from '../nameToLink';
import defualtImg from "../images/defualtChat.jpg";
import $ from 'jquery';
import chat_db from '../fictiveChatDB';


class Register extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userName : 0, nickName : 0, password : 0, confirmPass : 0, image: defualtImg
    };
    this.cPassRef = React.createRef();
    this.setUserName = this.setUserName.bind(this);
    this.setNickName = this.setNickName.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setConfirmPass = this.setConfirmPass.bind(this);
    this.register = this.register.bind(this);  
    this.setPage = props.setPage;
    this.setUser = props.setUser;
    this.picInputRef = React.createRef();
  }


  addPic = (event) => {
    this.picInputRef.current.click();
 }
 
 display = (result) => {
     this.setState({
         image: result
     })
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


  register() {
    if (!(this.state.userName && this.state.nickName && this.state.password &&
      this.state.confirmPass))
      return;
    const uName = this.state.userName;
    if (!users.has(uName)) {
      users.set(uName, {nickName: this.state.nickName, password: this.state.password, picture: this.state.image});
      chat_db.set(uName, {image: this.state.image, groups: []})
      this.setUser(uName);
      this.setPage(nameToLink.get('webPage'));
    }
    else {
      console.log('user name already exist');
    }
  }

  setUserName(value) {
    this.setState({
      userName: value
    })
  }
  setNickName(value) {
    this.setState({
      nickName: value
    })
  }
  setPassword(value) {
    this.setState({
      password: value
    })
  }
  setConfirmPass(value) {
    this.setState({
      confirmPass: value
    })
  }

  render() {
    const regex = '^[a-zA-Z]';
    const error = 'must begin with a letter'
    const confirmPassError = 'must match password'


    const uNameElement = <Input inputSetter={this.setUserName} checkRegex={regex} type={'text'}
    id={'uname'} description={'User Name'} eDescription={error}/>;
    const nNameElement = <Input inputSetter={this.setNickName} checkRegex={regex} type={'text'}
    id={'nname'} description={'Nick Name'} eDescription={error}/>;
    const cPassElement = <Input inputSetter={this.setConfirmPass} checkRegex={'^' + this.state.password + '$'} type={'password'}
    id={'cpass'} description={'Confirm Password'} eDescription={confirmPassError} ref={this.cPassRef}/>;
    const passElement = <Input inputSetter={this.setPassword} cSetter={this.setConfirmPass} cPassError={confirmPassError}
    checkRegex={regex} type={'password'} id={'pass'} description={'Password'} eDescription={error}
    cPassRef={this.cPassRef}/>;
    return (
      <div className='container'>
          {uNameElement}
          {nNameElement}
          {passElement}
          {cPassElement}
          <div className="mb-3">
          <input type="file" accept="image/*" ref={this.picInputRef} onChange={this.addedFile} hidden/>
          <img className='display-image' id='displayImage' src={defualtImg} alt="couldn't load" width="50" height="40" />
          <button onClick={this.addPic}>add pic</button>
          </div>

          <Link to={(this.state.userName && this.state.nickName && this.state.password &&
           this.state.confirmPass) && !users.has(this.state.userName) ? '/webPage' : ''} 
            className="btn btn-primary" onClick={this.register} >register</Link>
      </div>
    );
  }
}
export default Register;