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


function App() {
  var is_in_Registration = window. location. href.endsWith("/register");
  const [in_Registration, setIn_Registration] = useState(is_in_Registration);
  var linkTo = in_Registration? '/sign_in' : '/register';
  var linkFrom = in_Registration? '/register':'/sign_in' ;
  var strLinkTo = in_Registration? 'registeration' : 'sign in' ;
  var movingTo = in_Registration?<Login></Login>:<Register></Register>;
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={linkFrom} element={movingTo}></Route>
    </Routes>
      <Link to={linkTo} onClick={()=>setIn_Registration(!in_Registration)} >to {strLinkTo} </Link>
    </BrowserRouter>
    </>
  );
}

export default App;
