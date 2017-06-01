import React from 'react';
import Counter from "./Counter";
import {RaisedButton} from 'material-ui';
import rand from "random-key";

const CounterContainer = (props) =>(	
				<div>
					<h2>Slider N° {props.number}</h2>
					<Counter key={rand.generate(7)} />
					<RaisedButton label="Quitar" backgroundColor="#a4c639" onClick={props.onDeleteCounter} />
				</div>
		 );
		 
export default CounterContainer;
