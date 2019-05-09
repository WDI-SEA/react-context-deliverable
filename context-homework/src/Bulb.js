import React from 'react';
import {LightContext} from './LightContext';

function Bulb() {
  return (
    <div >
    <LightContext.Consumer>
  {
    ({ on }) => {

      let style = {
        height: '200px',
        width:'200px',
        background: on === true ? 'yellow' : 'white' ,
        display: 'flex',
        justifyContent: 'space-around',
        flexFlow:'row-wrap'
      }

      return(
        <div style={style}></div>
      )
    }

  }
 </LightContext.Consumer>
    </div>
  );
}

export default Bulb;
