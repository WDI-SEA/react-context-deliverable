import React from 'react'

export const colors = ['#000000', '#0000ff', '#00ff00', '#ff00ff', '#ff0000', '#bbbbbb', '#ff69b4'];

export const LightContext = React.createContext({
	on: false,
	color: colors[3],
	toggleSwitch: () => {}
})