import Input from './Input';
import React from "react";


class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      userName : 0, password : 0
    };
    this.setUserName = this.setUserName.bind(this);
    this.setPassword = this.setPassword.bind(this);    
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
    const regex = '^[a-zA-Z]';
    const error = 'must begin with a letter'
    const confirmPassError = 'must match password'


    const uNameElement = <Input inputSetter={this.setUserName} checkRegex={regex} type={'text'}
    id={'uname'} description={'User Name'} eDescription={error}/>;
    const passElement = <Input inputSetter={this.setPassword}
    checkRegex={regex} type={'password'} id={'password'} description={'Password'} eDescription={error}/>;
    
    return (
      <div className='container'>
        <form>
          {uNameElement}
          {passElement}
          <button type="submit" className="btn btn-primary" disabled={!(this.state.userName && this.state.password)}>Login</button>
        </form>
      </div>
    );
  }
}
export default Login;