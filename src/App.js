import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";
import React from "react";
import Register from './identification/Register';
import Login from './identification/Login';
import WebPage from "./WebPage";
import nameToLink from "./nameToLink";
import BackGround from "./BackGround";
import './bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor() {
    super();
    this.setUser = this.setUser.bind(this);
    this.setPage = this.setPage.bind(this);
    this.defualt_url = '';
    var pageInit = nameToLink.get('');
    if(window.location.href.match(/^http:\/\/localhost:\d+\/logIn$/) != null) {
      this.defualt_url = 'logIn';
      var pageInit = nameToLink.get(this.defualt_url);
    }
    if(window.location.href.match(/^http:\/\/localhost:\d+\/register$/) != null) {
      this.defualt_url = 'register';
      var pageInit = nameToLink.get(this.defualt_url);
    }
    if(window.location.href.match(/^http:\/\/localhost:\d+\/webPage$/) != null) {
      this.defualt_url = 'webPage';
      var pageInit = nameToLink.get(this.defualt_url);
    }
    this.state = {
      user : 0, page : pageInit
    };
    if(this.defualt_url === '')
    {
      window.location.href = "/logIn"
    }
  }
  
  setUser(value) {
    this.setState({
      user: value
    })
  }
  setPage(value) {
    this.setState({
      page: value
    })
  }

  render() {
    //assigning values
    const LoginElement = <Login setPage={this.setPage} setUser={this.setUser} />;
    const RegisterElement = <Register setPage={this.setPage} setUser={this.setUser} />;
    const WebPageElement = <WebPage userName={this.state.user}/>;
    var linkTo = '/'+this.state.page.linkTo;
    return (
      <>
      <BackGround css={this.state.page.bg}/>
      <BrowserRouter>
      <Routes>
        <Route path='' element={LoginElement}></Route>
        <Route path='/register' element={RegisterElement}></Route>
        <Route path='/logIn' element={LoginElement}></Route>
        <Route path='/webPage' element={WebPageElement}></Route>
      </Routes>
        <Link to={linkTo} onClick={()=>{this.setPage(nameToLink.get(this.state.page.linkTo))}} >{this.state.page.strLinkTo} </Link>
        {/* take the next line of when submitting */}
        {/* <br></br><Link to='/webPage' onClick={()=>{this.setPage(nameToLink.get('webPage'))}} >go to web page</Link> */}
      </BrowserRouter>
      </>
    );
  }
  
}


export default App;