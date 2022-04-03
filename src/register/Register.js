import { useState } from 'react';
import Input from './Input';
import React from "react";


class Register extends React.Component {

  constructor() {
    super()
    this.state = {
      userName : 0, nickName : 0, password : 0, confirmPass : 0
    };
    this.cPassRef = React.createRef();
    this.setUserName = this.setUserName.bind(this);
    this.setNickName = this.setNickName.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setConfirmPass = this.setConfirmPass.bind(this);
    
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
        <form>
          {uNameElement}
          {nNameElement}
          {passElement}
          {cPassElement}

          <div className="mb-3">
          <label htmlFor="profilePic" className="form-label">Add profile picture!</label>
          <input className="form-control" type="file" id="profilePic" accept="image/*" />
          </div>
          
          <button type="submit" className="btn btn-primary" disabled={!(this.state.userName && this.state.nickName && this.state.password && this.state.confirmPass)}>Register</button>
        </form>
      </div>
    );
  }
}
  export default Register;