import React, { Component } from 'react';
import {FlatButton,RaisedButton,GridList,GridTile} from 'material-ui';
import CounterContainer from "./CounterContainer";
import rand from "random-key";

class App extends Component {

    constructor(props) {
		super(props);

		//console.log('App -> constructor');

		this.state = {
		  value: 0,
		  amount:0,
		  counters:[]
		};

	 
	}

	deleteCounter (idCounter) {
		console.log("tengo que borrar el counter "+idCounter);
		this.setState(prevState => ({
			...prevState,
			counters: prevState.counters.filter(function(item){
				return (item.props.idCounter!==idCounter);
				})
		}));
	
	}
	
	
    duplicar() {
		 
		const keyCounter = rand.generate(7);
		this.setState(prevState => ({
			...prevState,
			amount: prevState.amount + 1,
		counters: prevState.counters.concat(<CounterContainer onDeleteCounter={() => this.deleteCounter(keyCounter)} key={keyCounter} number={prevState.amount + 1} idCounter={keyCounter}/>)
		}));
	}
	
  componentWillMount() { 
	//console.log('App -> componentWillMount');
	this.duplicar();
  }

  componentDidMount() {
   // console.log('App -> componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    //console.log('App -> componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    //console.log('App -> shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    //console.log('App -> componentWillUpdate');
  }

  componentDidUpdate(nextProps, nextState) {
    //console.log('App -> componentDidUpdate');
  }

  
  render() {

    const {amount,counters}  = this.state;
	const styles = {
		gridList: {
			width:"90%",
			margin: "0 auto"
		}
	};

    return (
	  <GridList cols={12} style={styles.gridList} cellHeight="auto" >
	  
		<GridTile cols={6}>
        <h1>Counter App</h1>
		<FlatButton label="Duplicar" onClick={() => this.duplicar()} primary={true} backgroundColor="green" />
        </GridTile>
		
		<GridTile cols={12} style={styles.gridList} >
			<GridList cols={4} cellHeight="auto" >
				
				{counters}
				
			</GridList>
		</GridTile>
		
      </GridList>
    );
  }
}


export default App;
