import Dashboard from './Components/Dashboard/Dashboard.js'
import Login from './Components/Login/Login.js'
import Home from './Components/Home/Home.js'
import {AuthProvider} from './Components/Auth/AuthContext.js'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

function App() {
  
  return (
    <AuthProvider>
    <Router>
      <div className="App">
        <Switch>
        <Route path ="/" component={Home} exact />
        <Route path ="/login" component={Login} />
        <Route path ="/dashboard" component={Dashboard}/>
        </Switch>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
