import Navbar from './Components/Navbar/Navbar.js'
import Login from './Components/Login/Login.js'
import Home from './Components/Home/Home.js'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';

function App() {

  const PrivateRoute = ({ component: Component, ...rest }) => {
    <Route {...rest} render={props => {
      localStorage.getItem('token') ? < Component{...props} />
        : <Redirect to={{ pathname: "/login" }}></Redirect>
    }}>

    </Route>
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute path="/home" component={Home} />
         <Route path="/" exact component={Navbar}/>
         <Route path="/login" component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
