import React from 'react';
import './App.css';
import {LightContext} from './LightContext'
import Bulb from './Bulb'
import Switch from './Switch'

class App extends React.Component {

  constructor (){
    super()
    this.state = {
      on: false,
      toggleSwitch: this.toggleSwitch
    }
  }

  toggleSwitch = () => {
    if (this.state.on === false){
      this.setState({
        on: true
      })
    } else if (this.state.on === true){
      this.setState({
        on: false
      })
    }
  }

  render(){
      return (
        <div className="App">
          <header className="App-header">
                <LightContext.Provider value={this.state}>
                   <Bulb />
                   <Switch />
               </LightContext.Provider>
          </header>
        </div>
      );
    }
}

export default App;
