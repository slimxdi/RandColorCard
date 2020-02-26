import React, { Component } from "react";
import "./styles.css";
import RandColorCard from "./Components/RandColorCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RandColorCard
          red={Math.floor(Math.random() * 255)}
          green={Math.floor(Math.random() * 255)}
          blue={Math.floor(Math.random() * 255)}
        />
        <RandColorCard
          red={Math.floor(Math.random() * 255)}
          green={Math.floor(Math.random() * 255)}
          blue={Math.floor(Math.random() * 255)}
        />
        <RandColorCard
          red={Math.floor(Math.random() * 255)}
          green={Math.floor(Math.random() * 255)}
          blue={Math.floor(Math.random() * 255)}
        />
      </div>
    );
  }
}

export default App;
