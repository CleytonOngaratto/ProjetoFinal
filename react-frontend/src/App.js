import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListDestinoComponent from './components/ListDestinoComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import MainComponent from './components/MainComponent';
import CreateDestinoComponent from './components/CreateDestinoComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

 




function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> http://localhost:3000/
                          <Route path = "/" exact component = {MainComponent}></Route>
                          <Route path = "/destinos" component = {ListDestinoComponent}></Route>
                           <Route path = "/add-destino/:id" component = {CreateDestinoComponent}></Route>
                          {/*<Route path = "/view-destino/:id" component = {ViewDestinoComponent}></Route> */}
                        
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
