
import './App.css';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Home from './components/Home/Home';
import NotFound from './NotFound/NotFound';
import { Container } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';


function App() {

  return (
          <div>
              <Router>
               <Header></Header>
                <Switch>
                  <Route path='/home'>
                      <Home/>
                  </Route>
                  <Route path='/posts/:id'>
                      <FriendDetails/>
                  </Route>
                  <Route exact path='/'>
                      <Home/>
                  </Route>
                  <Route path='*'>
                      <NotFound/>
                  </Route>
                </Switch>
              </Router>
          </div>
        
  );
}

export default App;
