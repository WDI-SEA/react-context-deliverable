import React from 'react';
import {LightContext} from './LightContext';


function Switch() {
  return (
    <div >
          <LightContext.Consumer>
          {
            ({toggleSwitch}) => {
              return(
                <button className="Button" onClick={toggleSwitch}>Turn ON/OFF</button>
              )
            }
          }
        </LightContext.Consumer>

    </div>
  );
}

export default Switch;
