import React, {Component} from "react";
// import Table from './Table';
// import Form from './Form';
import HeaderBar from "./HeaderBar";
import NavBar from "./NavBar";

class App extends Component {

  render() {

      return (
        <div className="container">
        <HeaderBar />
        <NavBar/>
        </div>
    )
  }



}

export default App