//import Register from './register/Register';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Routes
} from "react-router-dom";
import { useState } from 'react';
import Regist from './Regist';
import Sign from './Sign';

function App() {
  var is_in_Registration = window. location. href.endsWith("/register");
  const [in_Registration, setIn_Registration] = useState(is_in_Registration);
  var linkTo = in_Registration? '/sign_in' : '/register';
  var linkFrom = in_Registration? '/register':'/sign_in' ;
  var strLinkTo = in_Registration? 'registeration' : 'sign in' ;
  var movingTo = in_Registration?<Sign></Sign>:<Regist></Regist>;
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Route path='/register' element={<Regist />}></Route>
      <Route path='/sign_in' element={<Sign />}></Route> */}
      <Route path={linkFrom} element={movingTo}></Route>

    </Routes>
    {/* <Link to='/register'>to register</Link><br></br>
    <Link to='/sign_in'>to sign in</Link> */}
    <Link to={linkTo} onClick={()=>setIn_Registration(!in_Registration)} >to {strLinkTo} </Link>
    </BrowserRouter>
    </>
  );
}

export default App;
