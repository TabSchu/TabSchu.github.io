import React, {Component} from "react";
// import Table from './Table';
// import Form from './Form';
import HeaderBar from "./HeaderBar";
import NavBar from "./NavBar";
import Beitrag from "./Beitrag";
import Themengebiet from "./Themengebiet";
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
import BeitragHook from "./hooks/BeitragHook";

class App extends Component {


render(){

  let fetch_url_latein_artikel = "http://localhost:8080/beitragBySubsportart?subsportart=1&medientyp=Artikel";
  let fetch_url_latein_video = "http://localhost:8080/beitragBySubsportart?subsportart=1&medientyp=Video";
  let fetch_url_latein_podcast = "http://localhost:8080/beitragBySubsportart?subsportart=1&medientyp=Podcast";

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
                <Route path="/themengebiet/artikel" render={props =>
                <div>

                <Themengebiet/>
                </div>
                
                } 
                />    
                <Route path="/themengebiet/podcast" render={props =>
                <div>
                  <BeitragHook medientyp={"Podcast"} fetch_url={fetch_url_latein_podcast}/>
                <Themengebiet/>

                </div>
                
                } 
                />  
                <Route path="/themengebiet/video" render={props =>
                <div>
                  <BeitragHook medientyp={"Video"} fetch_url={fetch_url_latein_video}/>
                <Themengebiet/>
                
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