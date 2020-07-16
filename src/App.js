import React, {Component} from "react";
// import Table from './Table';
// import Form from './Form';
import HeaderBar from "./HeaderBar";
import NavBar from "./NavBar";
import Themengebiet from "./Themengebiet";
import HeaderBarMyZphere from "./HeaderBarMyZphere";
import Explore from "./Explore";
import Merkliste from "./Merkliste";
import Home from "./Home";
import Profilseite from "./Profilseite";
import Artikel from "./Artikel";
import Video from "./Video";
import Podcast from "./Podcast";
import NavBarExplore from "./NavBarExplore"
import NavBarMerkliste from "./NavBarMerkliste"
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
import SearchBar from "./SearchBar";

class App extends Component {


render(){

  let fetch_url_latein_artikel = "http://localhost:8080/beitragBySubsportart?subsportart=1&medientyp=Artikel";
  let fetch_url_latein_video = "http://localhost:8080/beitragBySubsportart?subsportart=1&medientyp=Video";
  let fetch_url_latein_podcast = "http://localhost:8080/beitragBySubsportart?subsportart=1&medientyp=Podcast";

      return (
         <Router>
          <div>
              <Switch> 
                <Route path="/explore" render={props =>
                <div>

                <Explore/>
                <NavBarExplore />
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
                  {/* <BeitragHook medientyp={"Podcast"} fetch_url={fetch_url_latein_podcast}/> */}
                <Themengebiet/>

                </div>
                
                } 
                />  
                <Route path="/themengebiet/video" render={props =>
                <div>
                  {/* <BeitragHook medientyp={"Video"} fetch_url={fetch_url_latein_video}/> */}
                <Themengebiet/>
                
                </div>
                
                } 
                />  
                <Route path="/merkliste" render={props =>
                <div>
                <HeaderBarMyZphere />
                <Merkliste />
                <NavBarMerkliste />
                </div>
                }/>

                <Route path="/editProfil" render={props =>
                <div>
                <EditProfil/>
                <HeaderBarProfilEdit />
                <NavBarMerkliste />
                </div>
                }/>

                <Route path="/artikel" render={props =>
                <div>
                <Artikel />
                
                </div>
                }/>

                <Route path="/video" render={props =>
                <div>
                <Video />
                
                </div>
                }/>
                
                <Route path="/profilseite" render={props => 
                <div>
                  <Profilseite />
                </div>  
                }/>

                <Route path="/podcast" render={props =>
                <div>
                <Podcast />
                
                </div>
                }/>

                <Route path="/favoriten" exact render={props =>
                <div>
                  <Favoriten />
                  <HeaderBarMyZphere />
                  <NavBarMerkliste />
                </div>
              } />
                    
                <Route path="/" exact render={props =>
                <div>
                           
                  <Home />
                  <NavBar />

                </div>
              } />       
            </Switch>
            </div>
        </Router>
    )
  }
}

export default App;