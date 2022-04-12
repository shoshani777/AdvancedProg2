import Input from './Input';
import React from "react";
import users from './users';
import nameToLink from '../nameToLink';
import {
  Link,
} from "react-router-dom";


class Login extends React.Component {

  constructor(props) {
    super()
    this.state = {
      userName : 0, password : 0
    };
    this.setUserName = this.setUserName.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.login = this.login.bind(this);   
    this.setPage = props.setPage;
    this.setUser = props.setUser;
  }

  login() {
    if (!(this.state.userName && this.state.password))
      return;
    const uName = this.state.userName;
    if (users.has(uName) && users.get(uName).password === this.state.password) {
      this.setUser(uName);
      this.setPage(nameToLink.get('webPage'));
    }
    else {
      console.log('incorrect user name or password');
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
    const regex = '^[a-zA-Z]';
    const error = 'must begin with a letter'


    const uNameElement = <Input inputSetter={this.setUserName} checkRegex={regex} type={'text'}
    id={'uname'} description={'User Name'} eDescription={error}/>;
    const passElement = <Input inputSetter={this.setPassword}
    checkRegex={regex} type={'password'} id={'password'} description={'Password'} eDescription={error}/>;
    
    return (
      
        <form>
          {uNameElement}
          {passElement}
          <Link to={(users.has(this.state.userName) && this.state.userName && this.state.password &&
            users.get(this.state.userName).password === this.state.password) ? '/webPage' : ''} 
            className="btn btn-primary" onClick={this.login} >Login</Link>
        </form>
      
    );
  }
}
export default Login;