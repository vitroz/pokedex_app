import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch } from 'react-router-dom'
import NewPokemon from '../pokemon/NewPokemon';
import {Link} from 'react-router-dom'

export default class CrudCommand extends Component {
	render(){
		return(
			<div className="row mb-2">
				<div className="col">
					<Link to="/new/pokemon">
						<button className="btn btn-success">Criar novo Pokemon</button>
					</Link>
				</div>
				<div className="col">
					<Link to="/new/evolution">
						<button className="btn btn-primary">Associar Evolução</button>
					</Link>		
				</div>		
			</div>
		)
	}
}
