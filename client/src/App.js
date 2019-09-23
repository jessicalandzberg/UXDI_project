import React from 'react';
import './CSS/General.css';
import Main from "./Components/Main"
import Buttons from "./Components/Buttons"
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"

class App extends React.Component {
  render () {
    return(
      <div className="App">
        <Nav />
        <Buttons />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
