import React, { Component } from 'react';

class changeHex extends Component {
	constructor() {
		super()
		this.state = {
			hex: '#ffffff',
		}
	}

	changeHex = () => {
		let hexCode= '#';
		const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
		
	  for(let i = 0; i < 6; i++) {
			const index = Math.floor(Math.random() * hexValues.length)
			hexCode += hexValues[index];
		}

		this.setState({
			hex: hexCode
		})
	};

	render() {
		let mystyle = {
			backgroundColor: this.state.hex,
		};

		return (
			<div className='container' style={mystyle}>
				<h1>Hex Code: {this.state.hex}</h1>
				<button onClick={() => this.changeHex()}>Change color</button>
			</div>
		)
	}
}

export default changeHex