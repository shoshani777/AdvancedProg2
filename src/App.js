//import Register from './register/Register';
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { useState } from 'react';
import Register from './identification/Register';
import Login from './identification/Login';
import WebPage from "./WebPage";


const map = {'':{name:'logIn',linkTo:'register',strLinkTo:"Haven't registered?"},
'logIn':{name:'logIn',linkTo:'register',strLinkTo:"Haven't registered?"},
'register':{name:'register',linkTo:'logIn',strLinkTo:"I already have an account"},
'webPage':{name:'webPage',linkTo:'logIn',strLinkTo:"Exit"}}

function App() {
  var defualt_url = ''
  //assigning values
  if(window. location. href.match(/^http:\/\/localhost:\d+\/logIn$/)!=null){defualt_url = 'logIn' }
  if(window. location. href.match(/^http:\/\/localhost:\d+\/register$/)!=null){defualt_url = 'register' }
  if(window. location. href.match(/^http:\/\/localhost:\d+\/webPage$/)!=null){defualt_url = 'webPage' }
  const [page, setPage] = useState(map[defualt_url]);
  if(defualt_url == '')
  {
    window. location. href = "/logIn"
  }
  var linkTo = '/'+page.linkTo;
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/logIn' element={<Login></Login>}></Route>
      <Route path='/webPage' element={<WebPage />}></Route>
    </Routes>
      <Link to={linkTo} onClick={()=>{setPage(map[page.linkTo])}} >{page.strLinkTo} </Link>
      {/* take the next line of when submitting */}
      <br></br><Link to='/webPage' onClick={()=>{setPage(map['webPage'])}} >go to web page</Link>
    </BrowserRouter>
    </>
  );
}

export default App;