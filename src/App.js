
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Customers from './pages/admin/Customers';
import Dashboard from './pages/admin/Dashboard';
import Login from './pages/admin/Login';


function App() {
  return (
    <>
      <Router>
       
        <Switch>
          <Route path='/admin/login' exact component={()=> <Login/>}/>
          <Route path='/admin/dashboard' exact component={Dashboard}/>
          <Route path='/admin/customers' component={Customers}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
