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
import signImg from '../images/SignIn.png';
import './Register.css';


class Register extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userName : 0, nickName : 0, password : 0, confirmPass : 0, image: defualtImg,error:''
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
      this.state.confirmPass)){
        this.setState({error:'Please fill out the required information'});
        return;
      }
    const uName = this.state.userName;
    if (!users.has(uName)) {
      users.set(uName, {nickName: this.state.nickName, password: this.state.password, picture: this.state.image});
      chat_db.set(uName, {image: this.state.image, groups: []})
      this.setUser(uName);
      this.setPage(nameToLink.get('webPage'));
    }
    else {
      this.setState({error:'User name already exists'});
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


    const uNameElement = <Input inputSetter={this.setUserName} checkRegex={regex} type={'text'} howShortened={'2'} longInput={false}
    id={'uname'} description={'User Name'} eDescription={error}/>;
    const nNameElement = <Input inputSetter={this.setNickName} checkRegex={regex} type={'text'} howShortened={'2'} longInput={false}
    id={'nname'} description={'Nick Name'} eDescription={error}/>;
    const cPassElement = <Input inputSetter={this.setConfirmPass} checkRegex={'^' + this.state.password + '$'} type={'password'} longInput={false}
    id={'cpass'} description={'Confirm Password'} eDescription={confirmPassError} ref={this.cPassRef} howShortened={'2'}/>;
    const passElement = <Input inputSetter={this.setPassword} cSetter={this.setConfirmPass} cPassError={confirmPassError} longInput={false}
    checkRegex={regex} type={'password'} id={'pass'} description={'Password'} eDescription={error} howShortened={'2'}
    cPassRef={this.cPassRef}/>;
    return (
      <div className='container'>
          <div className='logInDiv'>
            <form>
              <table border="1" className='logInTbl'>
                <tbody>
                  <tr className='transperantBorderReg trHead'>
                    <td className='gap'></td>
                    <td colSpan={'3'}>
                        <p className='logInHeader a0marginBtm'>Register</p>
                    </td>
                    <td className='gap'></td>
                  </tr>
                  <tr className='TrReg transperantBorderReg'>
                    <td>
                    </td>
                    <td className='uNameDescriptionTd'>
                      <span className="input-group-text spn" id="inputGroup-sizing-sm">
                        <p className='a0marginBtm uNameP'>User Name:</p>
                      </span>
                    </td>
                    <td className='uNameTd'  colSpan={'2'}>
                      {uNameElement}
                    </td>
                  </tr>
                  <tr className='TrReg transperantBorderReg'>
                    <td>
                    </td>
                    <td className='nNameDescriptionTd'>
                      <span className="input-group-text spn" id="inputGroup-sizing-sm">
                        <p className='a0marginBtm uNameP'>Nick Name:</p>
                      </span>
                    </td>
                    <td className='nNameTd'  colSpan={'2'}>
                      {nNameElement}
                    </td>
                  </tr>
                  <tr className='TrReg transperantBorderReg'>
                    <td>
                    </td>
                    <td>
                      <span className="input-group-text spn" id="inputGroup-sizing-sm">
                        <p className='a0marginBtm paswordP'>Password:</p>
                      </span>
                    </td>
                    <td colSpan={'2'}>
                    {passElement}
                    </td>
                  </tr>
                  <tr className='TrReg transperantBorderReg'>
                    <td>
                    </td>
                    <td>
                      <span className="input-group-text spn" id="inputGroup-sizing-sm">Confirm Password:</span>
                    </td>
                    <td colSpan={'2'}>
                    {cPassElement}
                    </td>
                  </tr>
                  <tr className='errorTr transperantBorderReg'>
                    <td colSpan={'4'}>
                      <div className='errorTxt'>{this.state.error}</div>
                    </td>
                  </tr>
                  <tr className='transperantBorderReg'>
                    <td>
                    </td>
                    <td colSpan={'2'} className='vw12'>
                      <Link to={(this.state.userName && this.state.nickName && this.state.password &&
                      this.state.confirmPass) && !users.has(this.state.userName) ? '/webPage' : ''} 
                        className="btn btn-primary" id="register" onClick={this.register} ><p className='pRegister'>Register</p></Link>
                    </td>
                    <td>
                      <Link to={'/logIn'}><img className='signImgReg' src={signImg}></img></Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
          
      <div className="mb-3">
      <input type="file" accept="image/*" ref={this.picInputRef} onChange={this.addedFile} hidden/>
      <img className='display-image' id='displayImage' src={defualtImg} alt="couldn't load" width="50" height="40" />
      <button onClick={this.addPic}>add pic</button>
      </div>


      </div>
    );
  }
}
export default Register;