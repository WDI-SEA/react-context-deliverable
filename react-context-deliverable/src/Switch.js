import React, { Component } from 'react'
import { LightContext } from './LightContext'

function Switch() {
	return (
		<LightContext.Consumer>
			{
				({ toggleSwitch }) => {
					return (
						<button className="Button" onClick={toggleSwitch}>Make it pink!</button>
					)
				}
			}
		</LightContext.Consumer>
		)
}

export default Switch