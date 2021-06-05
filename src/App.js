import Navbar from './Components/Navbar/Navbar.js'
import Login from './Components/Login/Login.js'
import Home from './Components/Home/Home.js'
import SignUp from './Components/SignUp/SignUp.js'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import {AuthProvider} from './Components/Auth/Auth'

function App() {

  return (
    <AuthProvider>
    <Router>
      <div className="App">
        <Switch>
        <Route path="/" exact component={Navbar}/>
         <Route path="/home" component={Home} />
         <Route path="/login" component={Login}/>
         <Route path="/signup" component={SignUp}/>
        </Switch>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
