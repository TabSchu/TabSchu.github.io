import React, {Component} from "react";
// import Table from './Table';
// import Form from './Form';
import HeaderBar from "./HeaderBar";
import NavBar from "./NavBar";
import Beitrag from "./Beitrag";
import HeaderBarMyZphere from "./HeaderBarMyZphere";
import Explore from "./Explore";
import Merkliste from "./Merkliste";
import Home from "./Home";
import Artikel from "./Artikel";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EditProfil from "./EditProfil";
import HeaderBarProfilEdit from "./HeaderBarProfilEdit";
import Favoriten from "./Favoriten";

class App extends Component {


render(){
      return (
         <Router>
          <div>
              
            
              <NavBar/>

              <Switch> 
                <Route path="/explore" render={props =>
                <div>

                <Explore/>
                
                </div>
                } 
                />
                    
                <Route path="/merkliste" render={props =>
                <div>
                <HeaderBarMyZphere />
                <Merkliste />
                </div>
                }/>

                <Route path="/editProfil" render={props =>
                <div>
                <EditProfil/>
                <HeaderBarProfilEdit />
                </div>
                }/>

                <Route path="/artikel" render={props =>
                <div>
                <Artikel />
                <HeaderBar />
                </div>
                }/>

                <Route path="/favoriten" exact render={props =>
                <div>
                  <Favoriten />
                  <HeaderBarMyZphere />
                </div>
              } />
                    
                <Route path="/" exact render={props =>
                <div>
                  <Home />
                  <HeaderBar />
                </div>
              } />

                
                    
            </Switch>
            </div>
        </Router>
              

        
    )
  }



}

export default App;