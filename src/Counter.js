import React, { Component } from 'react';
import {Slider,RaisedButton,GridTile} from 'material-ui';


class Counter extends Component {

	constructor(props) {
		super(props);

		this.state = {
			value: 0
		};
	}

	increase() {
		this.setState(prevState => ({
			...prevState,
			value: (prevState.value < 100 ? prevState.value + 10 : prevState.value) 
		}));
	}

	decrease() {
		this.setState(prevState => ({
			...prevState,
			value: (prevState.value > 0 ? prevState.value - 10 : prevState.value)
		}));
	}

	render() {

	const value = this.state.value;
	const styles = {
		gridTile: {
			width:"100%",
			margin: "0 auto",
		}
	};
	
	return (
			<GridTile cols={12} style={styles.gridTile}>
				<RaisedButton onClick={() => this.increase()} label="+" primary={true}  />
				<RaisedButton label="-" onClick={() => this.decrease()} secondary={true}  />
				<Slider value={value} step={10} max={100} />
			</GridTile>
		);
	};

}

export default Counter;
