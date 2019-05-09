import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bulb from './Bulb'
import Switch from './Switch'
import { LightContext } from './LightContext'

class App extends React.Component {
  state = {
    on: false,
    toggleSwitch: () => {
      this.setState({
        on: !this.state.on
      })
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <LightContext.Provider value={this.state}>
            <Bulb />
            <Switch />
          </LightContext.Provider>
        </header>
      </div>
    )
  }
}

export default App;
