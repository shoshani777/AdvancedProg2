import Input from './Input';
import React from "react";
import users from './users';
import nameToLink from '../nameToLink';
import {
  Link,
} from "react-router-dom";
// import signImg from '../images/SignUp.jpg';
import signImg from '../images/SignUp.png';

import './Login.css';


class Login extends React.Component {

  constructor(props) {
    super()
    this.state = {
      userName : 0, password : 0,error:''
    };
    this.setUserName = this.setUserName.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.login = this.login.bind(this);   
    this.setPage = props.setPage;
    this.setUser = props.setUser;
  }

  login() {
    if (!(this.state.userName && this.state.password)) {
      this.setState({error:'please enter user name and password'});
      return;
    }
    const uName = this.state.userName;
    if (users.has(uName) && users.get(uName).password === this.state.password) {
      this.setUser(uName);
      this.setPage(nameToLink.get('webPage'));
    }
    else {
      this.setState({error:'incorrect user name or password'});
    }
  }

  setUserName(value) {
    this.setState({
      userName: value
    })
  }
  setPassword(value) {
    this.setState({
      password: value
    })
  }

  render() {
    console.log("refresh");
    const regex = '^[a-zA-Z]';
    const error = 'must begin with a letter'


    const uNameElement = <Input inputSetter={this.setUserName} checkRegex={regex} type={'text'} isShortened={false}
    id={'uname'} description={'User Name:'} eDescription={error}/>;
    const passElement = <Input inputSetter={this.setPassword} isShortened={false}
    checkRegex={regex} type={'password'} id={'password'} description={'Password:'} eDescription={error}/>;
    
    return (
      <div className='logInDiv'>
        <form>
          <table border="1" className='logInTbl'>
            <tbody>
              <tr className='transperantBorder'>
                <td className='gap'></td>
                <td colSpan={'3'}>
                    <p className='logInHeader a0marginBtm'>Login</p>
                </td>
              </tr>
              <tr className='uNameTr transperantBorder'>
                <td>
                </td>
                <td className='uNameDescriptionTd'>
                  <span className="input-group-text spn" id="inputGroup-sizing-sm">User Name:</span>
                </td>
                <td className='uNameTd'  colSpan={'2'}>
                  {uNameElement}
                </td>
              </tr>
              <tr className='transperantBorder'>
                <td>
                </td>
                <td>
                  <span className="input-group-text spn" id="inputGroup-sizing-sm">Password:</span>
                </td>
                <td colSpan={'2'}>
                {passElement}
                </td>
              </tr>
              <tr className='errorTr transperantBorder'>
                <td colSpan={'4'}>
                  <div className='errorTxt'>{this.state.error}</div>
                </td>
              </tr>
              <tr className='transperantBorder'>
                <td>
                </td>
                <td colSpan={'2'} className='vw12'>
                  <Link to={(users.has(this.state.userName) && this.state.userName && this.state.password &&
                  users.get(this.state.userName).password === this.state.password) ? '/webPage' : ''} 
                  className="btn btn-primary" onClick={this.login} id="logIn" ><p className='pLogIn'>Login</p></Link>
                </td>
                <td>
                  <Link to={'/register'}><img className='signImg' src={signImg}></img></Link>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
export default Login;