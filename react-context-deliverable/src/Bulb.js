import React, { Component } from 'react'
import { LightContext } from './LightContext'


export default function Bulb() {
	return (
		<LightContext.Consumer>
			{
				({ on }) => {
					let style ={
						height: '200px',
						width: '200px',
						background: on ? 'hotpink' : 'black',
						display: 'flex',
						justifyContent: 'space-around',
						flexFlow: 'row wrap'
					}

					return (
						<div style={style}></div>
					)
				}
			}
		</LightContext.Consumer>
	)
}
